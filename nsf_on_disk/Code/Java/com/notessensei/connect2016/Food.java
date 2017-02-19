package com.notessensei.connect2016;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.Set;
import java.util.Vector;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lotus.domino.Database;
import lotus.domino.Document;
import lotus.domino.Item;
import lotus.domino.NotesException;
import lotus.domino.Session;
import lotus.domino.View;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonStreamParser;
import com.google.gson.stream.JsonWriter;
import com.ibm.domino.services.ServiceException;
import com.ibm.domino.services.rest.RestServiceEngine;
import com.ibm.xsp.extlib.component.rest.CustomService;
import com.ibm.xsp.extlib.component.rest.CustomServiceBean;
import com.ibm.xsp.extlib.util.ExtLibUtil;
import com.ibm.xsp.model.domino.DominoUtils;

public class Food extends CustomServiceBean {

	@SuppressWarnings("unchecked")
	protected void doGet(Session session, HttpServletRequest request, HttpServletResponse response) throws ServiceException,
			NotesException, IOException {

		Database db = null;
		View v = null;
		Document doc = null;

		db = DominoUtils.getCurrentDatabase();
		v = db.getView("FoodView");
		doc = v.getFirstDocument();
		OutputStream out = response.getOutputStream();
		PrintWriter pw = new PrintWriter(out);
		JsonWriter json = new JsonWriter(pw);
		json.beginArray();
		while (doc != null) {
			Document nextDoc = v.getNextDocument(doc);
			json.beginObject();
			Vector items = doc.getItems();
			for (int i = 0; i < items.size(); i++) {
				Item item = (Item) items.get(i);
				json.name(item.getName()).value(String.valueOf(item.getText()));
				Utils.shred(item);
			}

			json.endObject();
			Utils.shred(doc);
			doc = nextDoc;
		}
		json.endArray();
		json.flush();
		json.close();
		Utils.shred(doc, v, db);
		pw.close();
	}

	protected void doPost(Session session, HttpServletRequest request, HttpServletResponse response) throws IOException,
			NotesException {
		final InputStream in = request.getInputStream();
		final InputStreamReader reader = new InputStreamReader(in, "UTF-8");
		final BufferedReader r = new BufferedReader(reader);
		JsonStreamParser parser = new JsonStreamParser(r);

		JsonObject jo = parser.next().getAsJsonObject();
		Set<Entry<String, JsonElement>> set = jo.entrySet();
		if (!set.isEmpty()) {
			Database db = DominoUtils.getCurrentDatabase();
			Document doc = db.createDocument();
			doc.replaceItemValue("Form", "Fruit");
			Iterator<Entry<String, JsonElement>> iter = set.iterator();
			while (iter.hasNext()) {
				Entry<String, JsonElement> el = iter.next();
				doc.replaceItemValue(el.getKey(), String.valueOf(el.getValue().getAsString()));
			}
			doc.save();
		}
		r.close();
	}

	@SuppressWarnings("unchecked")
	protected Object getObjectFromJsonBody(final HttpServletRequest request, final Class classType) {
		Object result = null;
		try {
			final InputStream in = request.getInputStream();
			final InputStreamReader reader = new InputStreamReader(in, "UTF-8");
			final BufferedReader r = new BufferedReader(reader);
			final StringBuilder b = new StringBuilder();
			String line;
			while ((line = r.readLine()) != null) {
				b.append(line);
			}
			final Gson gson = new GsonBuilder().create();
			result = gson.fromJson(b.toString(), classType);
			reader.close();
		} catch (final IOException e) {
			e.printStackTrace();
		}

		return result;
	}

	@Override
	public void renderService(final CustomService service, final RestServiceEngine engine) throws ServiceException {

		final HttpServletRequest request = engine.getHttpRequest();
		final HttpServletResponse response = engine.getHttpResponse();
		final Session session = ExtLibUtil.getCurrentSessionAsSigner();

		response.setHeader("Content-Type", "application/json; charset=UTF-8");
		final String method = request.getMethod();
		try {
			if ("GET".equals(method)) {
				this.doGet(session, request, response);
			} else if ("POST".equals(method)) {
				this.doPost(session, request, response);
			} else {
				PrintWriter pw;
				response.setStatus(500);
				try {
					final OutputStream out = response.getOutputStream();
					pw = new PrintWriter(out);
					pw.write("{\"error\" : \"Unsupportd HTTP Verb\"}");
					pw.close();
				} catch (final IOException e) {
					e.printStackTrace();
				}

			}
		} catch (Exception e) {
			PrintWriter pw;
			response.setStatus(500);
			try {
				final OutputStream out = response.getOutputStream();
				pw = new PrintWriter(out);
				pw.write("{\"error\" : ");
				e.printStackTrace(pw);
				pw.write("}");
				pw.close();
			} catch (final IOException e1) {
				e1.printStackTrace();
			}
		}
	}

	// Convenvience wrapper with standard status
	protected void writeJsonResponse(final HttpServletResponse response, final Object output) {
		this.writeJsonResponse(response, output, 200);
	}

	/**
	 * Writing out the response from he servlet. We only process JSON from an
	 * Object
	 * 
	 * @param response
	 *            the Servlet response
	 * @param output
	 *            the Object to be serialized
	 * @param status
	 *            HTTP status - ideally 200 (or similar)
	 */
	protected void writeJsonResponse(final HttpServletResponse response, final Object output, final int status) {
		PrintWriter pw;
		OutputStream out = null;

		final GsonBuilder gb = new GsonBuilder();
		gb.setPrettyPrinting();
		gb.disableHtmlEscaping();
		final Gson gson = gb.create();

		try {
			out = response.getOutputStream();
			pw = new PrintWriter(out);
			gson.toJson(output, pw);

			pw.close();
			response.setStatus(status);
		} catch (final IOException e) {
			response.setStatus(500);
			e.printStackTrace();
		}
	}
}
