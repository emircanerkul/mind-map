If you want to use SmartDocs to test and explore APIs secured using API Keys, follow the steps outlined in [creating and attaching a CORS policy](https://docs.apigee.com/api-platform/develop/adding-cors-support-api-proxy#attachinganaddcorspolicytoanewapiproxy) and include the following `<Headers>` in your CORS policy:

`<AssignMessage async="false" continueOnError="false" enabled="true" name="add-cors">
    <DisplayName>Add CORS</DisplayName>
    <FaultRules/>
    <Properties/>
    <Set>
        <Headers>
            <Header name="Access-Control-Allow-Origin">{request.header.origin}</Header>
            <Header name="Access-Control-Allow-Headers">origin, x-requested-with, accept, content-type</Header>
            <Header name="Access-Control-Max-Age">3628800</Header>
            <Header name="Access-Control-Allow-Methods">GET, PUT, POST, DELETE</Header>
        </Headers>
    </Set>
    <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables>
    <AssignTo createNew="false" transport="http" type="response"/>
</AssignMessage>`