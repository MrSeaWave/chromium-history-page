import { getMethod } from '@/utils/request';

export async function getVerPosOsJson(os) {
  return getMethod({ url: `json/ver-pos-os/version-position-${os}.json` });
}
