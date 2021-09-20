const lambda = require('@aws-cdk/aws-lambda')
const apigateway = require('@aws-cdk/aws-apigateway')
const cdk = require('@aws-cdk/core');

class CdkStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

  }
}

module.exports = { CdkStack }
