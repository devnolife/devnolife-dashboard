/* eslint-disable import/newline-after-import */
import dynamic from 'next/dynamic'

import Settings from './Setting'
1

const tabContentList = () => ({
  'jenis-surat': <div>Halaman Jenis Surat</div>,
  'tujuan-surat': <div>Halaman Tujuan Surat</div>,
  'masalah-surat': <div>Halaman Masalah Surat</div>,
  'ketentuan-surat': <div>Halaman Ketentuan Surat</div>,
  'profile-admin': <div>Halaman Profile Admin</div>,
})

const administrasiSetting = () => {
  return <Settings tabContentList={tabContentList()} />
}

export default administrasiSetting
