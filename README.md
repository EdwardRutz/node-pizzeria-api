# Serverless Node.js API for a Pizzeria

>A Node.js API for a pizzeria to use with AWS Lambda



## API Features and Routes

- Lists all pizzas
- Look up pizza orders
- Create, update and cancel pizza orders

## Dependencies

- Node.js
- Claudia.js, ` npm install claudia -g `
- claudia-api-builder, ` npm install claudia-api-builder --save `
- claudia-bot-builder, ` npm install claudia-bot-builder --save `
- AWS Lambda
- AWS CLI




## Notes

- To semi-colon or not to semi-colon?  For a change, not using semi-colons to terminate statements
- When not using semi-colons in JS to end statements, just make sure that any line beginning with parenthesis has a semi-colon in front of it.
  - ie ` ;(d + e).print()`
  - This avoids the statement from being added to the statement before it.
- 'claudia-api-builder' does not work as a variable name for the import/require statement.
- Claudia adds a configuration file, "claudia.json," to root directory. Don't change it.
- For parameters that change(dynamic parameters), Claudia.js uses curly brackets {id} and express.js uses a colon (:id)
- With each change, update the Lambda function via Claudia.js, run ` claudia update ` 
- It is a good practice to put a message at the root path of an API so a friendly message is returned instead of an error 
` api.get("/", () => 'Welcome to Pizza API') `  
  


## Sources

- [Book: Serverless Applications with Node.js by Stojanovic & Simovic](https://www.manning.com/books/serverless-applications-with-node-js)
- [AWS Command Line Interface Download](https://aws.amazon.com/cli/)
- [AWS Docs: Loading Credentials in Node.js from the Shared Credentials File](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)
- [AWS Docs: Configuring SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/configuring-the-jssdk.html)
- [Fix the NPM "no repository field" warning by adding one](https://docs.npmjs.com/files/package.json#repository)

