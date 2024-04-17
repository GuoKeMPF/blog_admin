import { JSEncrypt } from 'jsencrypt';

export const public_key: string = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA57v36kw0lpfnJIkrOMpq
3X6gspqPm18i6F4aJby+dchUzbfgTSWwwqY5z3BeGo9frGTuJsWXeG5rVgtFtsLV
esWyHyNwRTVcywwzeoNm254QO1wR8Oqhm88Lpe9eLdsfc/OVsuSFoRpBUewNnaRk
+fSuyAydyqMWOekBpiw65lvhqnrmkPEHRk2+fzrMBrqsCMMt8iZICSUUKYKEkLeQ
c43u8t3mF9P45BoYHfYYgNwfH4P1TMgvtE4DfJCQidFPOzZBK1j33aLO4FWk8t++
TMXLC5XQxySiladu1yqJRe5AtryxFkIh75zmdGgCcQVAQrJ4jdS2LDVr+B+vHaxx
jwIDAQAB
-----END PUBLIC KEY-----`;


const encryptor = new JSEncrypt({
  default_key_size: '2048',
  default_public_exponent: '65537',
});
encryptor.setPublicKey(public_key);

export const encrypt = (str: string): string => {
  const result = encryptor.encrypt(str)
  if (!result) {
    throw new Error('encrypt error');
  }
  return result as string;
};
