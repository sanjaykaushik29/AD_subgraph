// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreateLaunchpad extends ethereum.Event {
  get params(): CreateLaunchpad__Params {
    return new CreateLaunchpad__Params(this);
  }
}

export class CreateLaunchpad__Params {
  _event: CreateLaunchpad;

  constructor(event: CreateLaunchpad) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collection(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get creationtime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[3].value.toString();
  }

  get symbol(): string {
    return this._event.parameters[4].value.toString();
  }

  get contractURI(): string {
    return this._event.parameters[5].value.toString();
  }

  get maxSupply(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract__createLaunchPadInput_uintsStruct extends ethereum.Tuple {
  get maxSupply(): BigInt {
    return this[0].toBigInt();
  }

  get whitelistedFee(): BigInt {
    return this[1].toBigInt();
  }

  get mintFee(): BigInt {
    return this[2].toBigInt();
  }

  get maxQuantity(): BigInt {
    return this[3].toBigInt();
  }

  get royalty(): BigInt {
    return this[4].toBigInt();
  }

  get WhiteListStartTime(): BigInt {
    return this[5].toBigInt();
  }

  get WhiteListEndTime(): BigInt {
    return this[6].toBigInt();
  }

  get maxNFTPerUser(): BigInt {
    return this[7].toBigInt();
  }
}

export class Contract__createLaunchPadInput_stringsStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get baseURI(): string {
    return this[2].toString();
  }

  get contractURI(): string {
    return this[3].toString();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  brokerAddress(): Address {
    let result = super.call("brokerAddress", "brokerAddress():(address)", []);

    return result[0].toAddress();
  }

  try_brokerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "brokerAddress",
      "brokerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createLaunchPad(
    _uints: Contract__createLaunchPadInput_uintsStruct,
    _strings: Contract__createLaunchPadInput_stringsStruct,
    _enableWhiteList: boolean,
    _currency: Address
  ): Address {
    let result = super.call(
      "createLaunchPad",
      "createLaunchPad((uint256,uint256,uint256,uint256,uint96,uint256,uint256,uint256),(string,string,string,string),bool,address):(address)",
      [
        ethereum.Value.fromTuple(_uints),
        ethereum.Value.fromTuple(_strings),
        ethereum.Value.fromBoolean(_enableWhiteList),
        ethereum.Value.fromAddress(_currency)
      ]
    );

    return result[0].toAddress();
  }

  try_createLaunchPad(
    _uints: Contract__createLaunchPadInput_uintsStruct,
    _strings: Contract__createLaunchPadInput_stringsStruct,
    _enableWhiteList: boolean,
    _currency: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createLaunchPad",
      "createLaunchPad((uint256,uint256,uint256,uint256,uint96,uint256,uint256,uint256),(string,string,string,string),bool,address):(address)",
      [
        ethereum.Value.fromTuple(_uints),
        ethereum.Value.fromTuple(_strings),
        ethereum.Value.fromBoolean(_enableWhiteList),
        ethereum.Value.fromAddress(_currency)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBrokerage(currency: Address): BigInt {
    let result = super.call("getBrokerage", "getBrokerage(address):(int256)", [
      ethereum.Value.fromAddress(currency)
    ]);

    return result[0].toBigInt();
  }

  try_getBrokerage(currency: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBrokerage",
      "getBrokerage(address):(int256)",
      [ethereum.Value.fromAddress(currency)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCollections(): Array<Address> {
    let result = super.call(
      "getCollections",
      "getCollections():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_getCollections(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getCollections",
      "getCollections():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getPublicKey(): Address {
    let result = super.call("getPublicKey", "getPublicKey():(address)", []);

    return result[0].toAddress();
  }

  try_getPublicKey(): ethereum.CallResult<Address> {
    let result = super.tryCall("getPublicKey", "getPublicKey():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUserCollection(user: Address): Array<Address> {
    let result = super.call(
      "getUserCollection",
      "getUserCollection(address):(address[])",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toAddressArray();
  }

  try_getUserCollection(user: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getUserCollection",
      "getUserCollection(address):(address[])",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateLaunchPadCall extends ethereum.Call {
  get inputs(): CreateLaunchPadCall__Inputs {
    return new CreateLaunchPadCall__Inputs(this);
  }

  get outputs(): CreateLaunchPadCall__Outputs {
    return new CreateLaunchPadCall__Outputs(this);
  }
}

export class CreateLaunchPadCall__Inputs {
  _call: CreateLaunchPadCall;

  constructor(call: CreateLaunchPadCall) {
    this._call = call;
  }

  get _uints(): CreateLaunchPadCall_uintsStruct {
    return changetype<CreateLaunchPadCall_uintsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get _strings(): CreateLaunchPadCall_stringsStruct {
    return changetype<CreateLaunchPadCall_stringsStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get _enableWhiteList(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _currency(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateLaunchPadCall__Outputs {
  _call: CreateLaunchPadCall;

  constructor(call: CreateLaunchPadCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateLaunchPadCall_uintsStruct extends ethereum.Tuple {
  get maxSupply(): BigInt {
    return this[0].toBigInt();
  }

  get whitelistedFee(): BigInt {
    return this[1].toBigInt();
  }

  get mintFee(): BigInt {
    return this[2].toBigInt();
  }

  get maxQuantity(): BigInt {
    return this[3].toBigInt();
  }

  get royalty(): BigInt {
    return this[4].toBigInt();
  }

  get WhiteListStartTime(): BigInt {
    return this[5].toBigInt();
  }

  get WhiteListEndTime(): BigInt {
    return this[6].toBigInt();
  }

  get maxNFTPerUser(): BigInt {
    return this[7].toBigInt();
  }
}

export class CreateLaunchPadCall_stringsStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get baseURI(): string {
    return this[2].toString();
  }

  get contractURI(): string {
    return this[3].toString();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _brokerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _platformPublicKey(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBrokerCall extends ethereum.Call {
  get inputs(): SetBrokerCall__Inputs {
    return new SetBrokerCall__Inputs(this);
  }

  get outputs(): SetBrokerCall__Outputs {
    return new SetBrokerCall__Outputs(this);
  }
}

export class SetBrokerCall__Inputs {
  _call: SetBrokerCall;

  constructor(call: SetBrokerCall) {
    this._call = call;
  }

  get newBrokerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBrokerCall__Outputs {
  _call: SetBrokerCall;

  constructor(call: SetBrokerCall) {
    this._call = call;
  }
}

export class SetBrokerageCall extends ethereum.Call {
  get inputs(): SetBrokerageCall__Inputs {
    return new SetBrokerageCall__Inputs(this);
  }

  get outputs(): SetBrokerageCall__Outputs {
    return new SetBrokerageCall__Outputs(this);
  }
}

export class SetBrokerageCall__Inputs {
  _call: SetBrokerageCall;

  constructor(call: SetBrokerageCall) {
    this._call = call;
  }

  get _brokerage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get currency(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetBrokerageCall__Outputs {
  _call: SetBrokerageCall;

  constructor(call: SetBrokerageCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdatePublicKeyCall extends ethereum.Call {
  get inputs(): UpdatePublicKeyCall__Inputs {
    return new UpdatePublicKeyCall__Inputs(this);
  }

  get outputs(): UpdatePublicKeyCall__Outputs {
    return new UpdatePublicKeyCall__Outputs(this);
  }
}

export class UpdatePublicKeyCall__Inputs {
  _call: UpdatePublicKeyCall;

  constructor(call: UpdatePublicKeyCall) {
    this._call = call;
  }

  get _newPlatformPublicKey(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdatePublicKeyCall__Outputs {
  _call: UpdatePublicKeyCall;

  constructor(call: UpdatePublicKeyCall) {
    this._call = call;
  }
}
