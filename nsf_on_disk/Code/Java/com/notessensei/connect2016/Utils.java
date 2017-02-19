package com.notessensei.connect2016;

import java.util.Collection;
import java.util.logging.Level;
import java.util.logging.Logger;

import lotus.domino.Base;
import lotus.domino.NotesException;

public class Utils {
	/**
	 * Little utility functions to make Domino more bearable
	 * 
	 * @author stw
	 * 
	 */

	final private static Logger	logger	= Logger.getLogger(Utils.class.getName());

	/**
	 * Get rid of all Notes objects
	 * 
	 * @param morituri
	 */
	public static void shred(final Base... morituri) {

		for (Base obsoleteObject : morituri) {
			if (obsoleteObject != null) {
				try {
					obsoleteObject.recycle();
				} catch (final NotesException e) {
					// We don't care we want go get
					// rid of it anyway
				} finally {
					obsoleteObject = null;
				}
			}
		}

	}

	public static void shred(final Collection<Base> morituri) {

		for (Base obsoleteObject : morituri) {
			if (obsoleteObject != null) {
				try {
					obsoleteObject.recycle();
				} catch (final NotesException e) {
					// We don't care we want go get
					// rid of it anyway
				} finally {
					obsoleteObject = null;
				}
			}
		}
	}

	/**
	 * Shorthand to fix the stupid bug that NotesError doesn't return a message
	 * 
	 * @param logger
	 *            the logger to record to
	 * @param e
	 *            the exception to capture
	 */
	public static void logError(final Logger logger, final Exception e) {
		final Logger realLogger = (logger == null) ? Utils.logger : logger;
		String errorMessage = (e instanceof NotesException) ? ((NotesException) e).text : e.getMessage();
		if (errorMessage == null) {
			errorMessage = "No error message " + e.getClass().getName();
		}
		realLogger.log(Level.SEVERE, errorMessage, e);
	}

	/**
	 * Shorthand to fix the stupid bug that NotesError doesn't return a message
	 * Logging warnings that
	 * 
	 * @param logger
	 *            the logger to record to
	 * @param e
	 *            the exception to capture
	 */
	public static void logWarning(final Logger logger, final Exception e) {
		final Logger realLogger = (logger == null) ? Utils.logger : logger;
		String errorMessage = (e instanceof NotesException) ? ((NotesException) e).text : e.getMessage();
		if (errorMessage == null) {
			errorMessage = "No warrning message " + e.getClass().getName();
		}
		realLogger.log(Level.WARNING, errorMessage, e);
	}
}
