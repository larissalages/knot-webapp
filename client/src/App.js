import React, { Component } from 'react';
import './App.css';
import { Panel, Button, Table, FormControl } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setConfig:
        {
          ownerUuid: "",
          ownerToken: "",
          thingUuid: "",
          itemId: "",
          evtFlags: "",
          timeSec: "",
          lowerLimit: "",
          upperLimit: ""
        },
        setData:
        {
          ownerUuid: "",
          ownerToken: "",
          thingUuid: "",
          itemId: "",
          itemData: ""
        },
        getData: { ownerUuid: "", ownerToken: "", thingUuid: "", itemId: "" },
        getDevices: { ownerUuid: "", ownerToken: "", gateway: "", response: "" },
        subscribe: { ownerUuid: "", ownerToken: "", thingUuid: "" },
    };
    this._onChangeSetConfig = this._onChangeSetConfig.bind(this);
    this.setConfig = this.setConfig.bind(this);
    this._onChangeSetData = this._onChangeSetData.bind(this);
    this.setData = this.setData.bind(this);
    this._onChangeGetData = this._onChangeGetData.bind(this);
    this.getData = this.getData.bind(this);
    this._onChangeGetDevices = this._onChangeGetDevices.bind(this);
    this.getDevices = this.getDevices.bind(this);
    this._onChangeSubscribe = this._onChangeSubscribe.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  _onChangeSetConfig = function(e) {
    const setConfig = this.state.setConfig;
    setConfig[e.target.name] = e.target.value;
    this.setState({ setConfig: setConfig });
  };

  _onChangeSetData = function(e) {
    const setData = this.state.setData;
    setData[e.target.name] = e.target.value;
    this.setState({ setData: setData });
  };
  _onChangeGetData = function(e) {
    const getData = this.state.getData;
    getData[e.target.name] = e.target.value;
    this.setState({ getData: getData });
  };
  _onChangeGetDevices = function(e) {
    const getDevices = this.state.getDevices;
    getDevices[e.target.name] = e.target.value;
    this.setState({ getDevices: getDevices });
  };
  _onChangeSubscribe = function(e) {
    const subscribe = this.state.subscribe;
    subscribe[e.target.name] = e.target.value;
    this.setState({ subscribe: subscribe });
  };
  setConfig = function(e) {
    e.preventDefault();
  };

  setData = function(e) {
    e.preventDefault();
  };

  getData = function(e) {
    e.preventDefault();
  };

  getDevices = function(e) {
    const getDevices = this.state.getDevices;
    fetch('/getDevices', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state.getDevices)
  }).then(res => res.json())
    .then(function(json) {
      getDevices['response'] = JSON.stringify(json, null, 3);
      console.log(json);
      this.setState({ getDevices: getDevices});
     }.bind(this));
    e.preventDefault();
  };

  subscribe = function(e) {
    e.preventDefault();
  };
  subscribe = function(e) {
    e.preventDefault();
  };
  render() {
    return (
      <div className="App">
      <h1>KNoT Sample App</h1>
        <Panel key={1} collapsible header="Set Config">
          <form>
            <Table responsive>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Owner UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      name="ownerUuid"
                      value={this.state.setConfig.ownerUuid}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Owner's UUID</td>
                </tr>
                <tr>
                  <td>Owner Token</td>
                  <td>
                    <FormControl
                      type="text"
                      name="ownerToken"
                      value={this.state.setConfig.ownerToken}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Owner's Token</td>
                </tr>
                <tr>
                  <td>Thing UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      name="thingUuid"
                      value={this.state.setConfig.thingUuid}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Thing UUID</td>
                </tr>
                <tr>
                  <td>Item ID</td>
                  <td>
                    <FormControl
                      type="text"
                      name="itemId"
                      value={this.state.setConfig.itemId}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Id for the item to apply config</td>
                </tr>
                <tr>
                  <td>Event Flags</td>
                  <td>
                    <FormControl
                      type="text"
                      name="evtFlags"
                      value={this.state.setConfig.evtFlags}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Config Flags</td>
                </tr>
                <tr>
                  <td>Time Sec</td>
                  <td>
                    <FormControl
                      type="text"
                      name="timeSec"
                      value={this.state.setConfig.timeSec}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Interval to send data in seconds</td>
                </tr>
                <tr>
                  <td>Lower Limit</td>
                  <td>
                    <FormControl
                      type="text"
                      name="lowerLimit"
                      value={this.state.setConfig.lowerLimit}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Lower Limit</td>
                </tr>
                <tr>
                  <td>Upper Limit</td>
                  <td>
                    <FormControl
                      type="text"
                      name="upperLimit"
                      value={this.state.setConfig.upperLimit}
                      onChange={this._onChangeSetConfig}
                    />
                  </td>
                  <td>Upper Limit</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="primary" onClick={this.setConfig}>
              Set Config
            </Button>
          </form>
        </Panel>
        <Panel key={2} collapsible header="Set Data">
          <form>
            <Table responsive>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Owner UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.setData.ownerUuid}
                      name="ownerUuid"
                      onChange={this._onChangeSetData}
                    />
                  </td>
                  <td>Owner's UUID</td>
                </tr>
                <tr>
                  <td>Owner Token</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.setData.ownerToken}
                      name="ownerToken"
                      onChange={this._onChangeSetData}
                    />
                  </td>
                  <td>Owner's Token</td>
                </tr>
                <tr>
                  <td>Thing UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.setData.thingUuid}
                      name="thingUuid"
                      onChange={this._onChangeSetData}
                    />
                  </td>
                  <td>Thing UUID</td>
                </tr>
                <tr>
                  <td>Item ID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.setData.itemId}
                      name="itemId"
                      onChange={this._onChangeSetData}
                    />
                  </td>
                  <td>Id for the item to apply config</td>
                </tr>
                <tr>
                  <td>Item Data</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.setData.itemData}
                      name="itemData"
                      onChange={this._onChangeSetData}
                    />
                  </td>
                  <td>Value to be set</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="primary" onClick={this.setData}>
              Set Data
            </Button>
          </form>
        </Panel>
        <Panel key={3} collapsible header="Get Data">
          <form>
            <Table responsive>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Owner UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.getData.ownerUuid}
                      name="ownerUuid"
                      onChange={this._onChangeGetData}
                    />
                  </td>
                  <td>Owner's UUID</td>
                </tr>
                <tr>
                  <td>Owner Token</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.getData.ownerToken}
                      name="ownerToken"
                      onChange={this._onChangeGetData}
                    />
                  </td>
                  <td>Owner's Token</td>
                </tr>
                <tr>
                  <td>Thing UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.getData.thingUuid}
                      name="thingUuid"
                      onChange={this._onChangeGetData}
                    />
                  </td>
                  <td>Thing UUID</td>
                </tr>
                <tr>
                  <td>Item ID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.getData.itemId}
                      name="itemId"
                      onChange={this._onChangeGetData}
                    />
                  </td>
                  <td>Id for the item to apply config</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="primary" onClick={this.getData}>
              Get Data
            </Button>
          </form>
        </Panel>
        <Panel key={4} collapsible header="Get Devices">
          <form>
            <Table responsive>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Owner UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.getDevices.ownerUuid}
                      name="ownerUuid"
                      onChange={this._onChangeGetDevices}
                    />
                  </td>
                  <td>Owner's UUID</td>
                </tr>
                <tr>
                  <td>Owner Token</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.getDevices.ownerToken}
                      name="ownerToken"
                      onChange={this._onChangeGetDevices}
                    />
                  </td>
                  <td>Owner's Token</td>
                </tr>
                <tr>
                  <td>Gateway</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.getDevices.gateway}
                      name="gateway"
                      onChange={this._onChangeGetDevices}
                    />
                  </td>
                  <td>Gateway</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="primary" onClick={this.getDevices}>
              Get Devices
            </Button>
          </form>
          <b>Get Devices Response:</b>
         <Panel >
          <p>{this.state.getDevices.response}</p>
        </Panel>
        </Panel>
        <Panel key={5} collapsible header="Subscribe">
          <form>
            <Table responsive>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Owner UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.subscribe.ownerUuid}
                      name="ownerUuid"
                      onChange={this._onChangeSubscribe}
                    />
                  </td>
                  <td>Owner's UUID</td>
                </tr>
                <tr>
                  <td>Owner Token</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.subscribe.ownerToken}
                      name="ownerToken"
                      onChange={this._onChangeSubscribe}
                    />
                  </td>
                  <td>Owner's Token</td>
                </tr>
                <tr>
                  <td>Thing UUID</td>
                  <td>
                    <FormControl
                      type="text"
                      value={this.state.subscribe.thingUuid}
                      name="thingUuid"
                      onChange={this._onChangeSubscribe}
                    />
                  </td>
                  <td>Thing UUID</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="primary" onClick={this.subscribe}>
              Subscribe
            </Button>
          </form>
        </Panel>
      </div>
    );
  }
}

export default App;