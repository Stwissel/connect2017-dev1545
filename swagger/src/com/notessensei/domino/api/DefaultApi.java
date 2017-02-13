
# This is a sample api mustache template.  It is representing a ficticous 
# language and won't be usable or compile to anything without lots of changes.
# Use it as an example.  You can access the variables in the generator object
# like such:

# use the package from the `apiPackage` variable
package: com.notessensei.domino.api

# operations block
classname: DefaultApi

# loop over each operation in the API:

# each operation has an `operationId`:
operationId: addFood

# and parameters:
food: Food


# each operation has an `operationId`:
operationId: deleteFood

# and parameters:
id: Long


# each operation has an `operationId`:
operationId: findCook

# and parameters:
type: List[text]
rows: number


# each operation has an `operationId`:
operationId: findFood

# and parameters:
type: List[text]
rows: number


# each operation has an `operationId`:
operationId: findFoodById

# and parameters:
id: Long


# end of operations block
