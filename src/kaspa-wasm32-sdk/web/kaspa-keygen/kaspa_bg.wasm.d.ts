/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_address_free(a: number, b: number): void;
export function address_constructor(a: number, b: number): number;
export function address_validate(a: number, b: number): number;
export function address_toString(a: number, b: number): void;
export function address_version(a: number, b: number): void;
export function address_prefix(a: number, b: number): void;
export function address_set_setPrefix(a: number, b: number, c: number): void;
export function address_payload(a: number, b: number): void;
export function address_short(a: number, b: number, c: number): void;
export function __wbg_mnemonic_free(a: number, b: number): void;
export function mnemonic_constructor(a: number, b: number, c: number, d: number): void;
export function mnemonic_validate(a: number, b: number, c: number): number;
export function mnemonic_entropy(a: number, b: number): void;
export function mnemonic_set_entropy(a: number, b: number, c: number): void;
export function mnemonic_random(a: number, b: number, c: number): void;
export function mnemonic_phrase(a: number, b: number): void;
export function mnemonic_set_phrase(a: number, b: number, c: number): void;
export function mnemonic_toSeed(a: number, b: number, c: number, d: number): void;
export function __wbg_networkid_free(a: number, b: number): void;
export function __wbg_get_networkid_type(a: number): number;
export function __wbg_set_networkid_type(a: number, b: number): void;
export function __wbg_get_networkid_suffix(a: number, b: number): void;
export function __wbg_set_networkid_suffix(a: number, b: number, c: number): void;
export function networkid_ctor(a: number, b: number): void;
export function networkid_id(a: number, b: number): void;
export function networkid_addressPrefix(a: number, b: number): void;
export function networkid_toString(a: number, b: number): void;
export function __wbg_transactionutxoentry_free(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_amount(a: number): number;
export function __wbg_set_transactionutxoentry_amount(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_scriptPublicKey(a: number): number;
export function __wbg_set_transactionutxoentry_scriptPublicKey(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_blockDaaScore(a: number): number;
export function __wbg_set_transactionutxoentry_blockDaaScore(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_isCoinbase(a: number): number;
export function __wbg_set_transactionutxoentry_isCoinbase(a: number, b: number): void;
export function __wbg_sighashtype_free(a: number, b: number): void;
export function __wbg_scriptpublickey_free(a: number, b: number): void;
export function __wbg_get_scriptpublickey_version(a: number): number;
export function __wbg_set_scriptpublickey_version(a: number, b: number): void;
export function scriptpublickey_constructor(a: number, b: number, c: number): void;
export function scriptpublickey_script_as_hex(a: number, b: number): void;
export function __wbg_hash_free(a: number, b: number): void;
export function hash_constructor(a: number, b: number): number;
export function hash_toString(a: number, b: number): void;
export function __wbg_publickey_free(a: number, b: number): void;
export function publickey_try_new(a: number, b: number, c: number): void;
export function publickey_toString(a: number, b: number): void;
export function publickey_toAddress(a: number, b: number, c: number): void;
export function publickey_toAddressECDSA(a: number, b: number, c: number): void;
export function publickey_toXOnlyPublicKey(a: number): number;
export function publickey_fingerprint(a: number): number;
export function __wbg_xonlypublickey_free(a: number, b: number): void;
export function xonlypublickey_try_new(a: number, b: number, c: number): void;
export function xonlypublickey_toString(a: number, b: number): void;
export function xonlypublickey_toAddress(a: number, b: number, c: number): void;
export function xonlypublickey_toAddressECDSA(a: number, b: number, c: number): void;
export function xonlypublickey_fromAddress(a: number, b: number): void;
export function __wbg_privatekey_free(a: number, b: number): void;
export function privatekey_try_new(a: number, b: number, c: number): void;
export function privatekey_toString(a: number, b: number): void;
export function privatekey_toKeypair(a: number, b: number): void;
export function privatekey_toPublicKey(a: number, b: number): void;
export function privatekey_toAddress(a: number, b: number, c: number): void;
export function privatekey_toAddressECDSA(a: number, b: number, c: number): void;
export function __wbg_publickeygenerator_free(a: number, b: number): void;
export function publickeygenerator_fromXPub(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_fromMasterXPrv(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function publickeygenerator_receivePubkeys(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_receivePubkey(a: number, b: number, c: number): void;
export function publickeygenerator_receivePubkeysAsStrings(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_receivePubkeyAsString(a: number, b: number, c: number): void;
export function publickeygenerator_receiveAddresses(a: number, b: number, c: number, d: number, e: number): void;
export function publickeygenerator_receiveAddress(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_receiveAddressAsStrings(a: number, b: number, c: number, d: number, e: number): void;
export function publickeygenerator_receiveAddressAsString(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_changePubkeys(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_changePubkey(a: number, b: number, c: number): void;
export function publickeygenerator_changePubkeysAsStrings(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_changePubkeyAsString(a: number, b: number, c: number): void;
export function publickeygenerator_changeAddresses(a: number, b: number, c: number, d: number, e: number): void;
export function publickeygenerator_changeAddress(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_changeAddressAsStrings(a: number, b: number, c: number, d: number, e: number): void;
export function publickeygenerator_changeAddressAsString(a: number, b: number, c: number, d: number): void;
export function publickeygenerator_toString(a: number, b: number): void;
export function __wbg_derivationpath_free(a: number, b: number): void;
export function derivationpath_new(a: number, b: number, c: number): void;
export function derivationpath_isEmpty(a: number): number;
export function derivationpath_length(a: number): number;
export function derivationpath_parent(a: number): number;
export function derivationpath_push(a: number, b: number, c: number, d: number): void;
export function derivationpath_toString(a: number, b: number): void;
export function __wbg_keypair_free(a: number, b: number): void;
export function keypair_get_public_key(a: number, b: number): void;
export function keypair_get_private_key(a: number, b: number): void;
export function keypair_get_xonly_public_key(a: number): number;
export function keypair_toAddress(a: number, b: number, c: number): void;
export function keypair_toAddressECDSA(a: number, b: number, c: number): void;
export function keypair_random(a: number): void;
export function keypair_fromPrivateKey(a: number, b: number): void;
export function __wbg_xpub_free(a: number, b: number): void;
export function xpub_try_new(a: number, b: number, c: number): void;
export function xpub_deriveChild(a: number, b: number, c: number, d: number): void;
export function xpub_derivePath(a: number, b: number, c: number): void;
export function xpub_intoString(a: number, b: number, c: number, d: number): void;
export function xpub_toPublicKey(a: number): number;
export function xpub_xpub(a: number, b: number): void;
export function xpub_depth(a: number): number;
export function xpub_parentFingerprint(a: number, b: number): void;
export function xpub_childNumber(a: number): number;
export function xpub_chainCode(a: number, b: number): void;
export function __wbg_privatekeygenerator_free(a: number, b: number): void;
export function privatekeygenerator_new(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function privatekeygenerator_receiveKey(a: number, b: number, c: number): void;
export function privatekeygenerator_changeKey(a: number, b: number, c: number): void;
export function __wbg_xprv_free(a: number, b: number): void;
export function xprv_try_new(a: number, b: number): void;
export function xprv_fromXPrv(a: number, b: number, c: number): void;
export function xprv_deriveChild(a: number, b: number, c: number, d: number): void;
export function xprv_derivePath(a: number, b: number, c: number): void;
export function xprv_intoString(a: number, b: number, c: number, d: number): void;
export function xprv_toString(a: number, b: number): void;
export function xprv_toXPub(a: number, b: number): void;
export function xprv_toPrivateKey(a: number, b: number): void;
export function xprv_privateKey(a: number, b: number): void;
export function xprv_depth(a: number): number;
export function xprv_parentFingerprint(a: number, b: number): void;
export function xprv_childNumber(a: number): number;
export function xprv_chainCode(a: number, b: number): void;
export function xprv_xprv(a: number, b: number): void;
export function version(a: number): void;
export function rustsecp256k1_v0_10_0_context_create(a: number): number;
export function rustsecp256k1_v0_10_0_context_destroy(a: number): void;
export function rustsecp256k1_v0_10_0_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_10_0_default_error_callback_fn(a: number, b: number): void;
export function __wbg_aborted_free(a: number, b: number): void;
export function __wbg_abortable_free(a: number, b: number): void;
export function abortable_new(): number;
export function abortable_isAborted(a: number): number;
export function abortable_abort(a: number): void;
export function abortable_check(a: number, b: number): void;
export function abortable_reset(a: number): void;
export function setLogLevel(a: number): void;
export function initWASM32Bindings(a: number, b: number): void;
export function defer(): number;
export function presentPanicHookLogs(): void;
export function initConsolePanicHook(): void;
export function initBrowserPanicHook(): void;
export function __wbindgen_export_0(a: number, b: number): number;
export function __wbindgen_export_1(a: number, b: number, c: number, d: number): number;
export function __wbindgen_export_2(a: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_export_3(a: number, b: number, c: number): void;