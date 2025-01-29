import { gql } from "@apollo/client"

export const GET_ALL_KKP = gql`
  query GetAllKkp {
    getAllKkp {
      id
      judul
      nim
      prodi_kode_prodi
      dosen_pembimbing
      dosen_penguji
      tanggal_seminar
      tanggal_sidang
      status
      created_at
      updated_at
    }
  }
`;

export const GET_ALL_KKP_BY_NIM = gql`
  query GetAllKkpByNim($nim: String!) {
    getAllKkpByNim(nim: $nim) {
      id
      judul
      nim
      prodi_kode_prodi
      dosen_pembimbing
      dosen_penguji
      tanggal_seminar
      tanggal_sidang
      status
      created_at
      updated_at
    }
  }
`;

export const GET_KKP_SYARAT_BY_KODE_PRODI = gql`
  query GetKkpSyaratByKodeProdi($kodeProdi: String!) {
    getKkpSyaratByKodeProdi(kodeProdi: $kodeProdi) {
      id
      nama
      logo
      is_upload_file
      is_activated
    }
  }
`;

export const GET_ALL_KKP_INSTANSI_APPROVALS = gql`
  query GetAllKkpInstansiApprovals {
    getAllKkpInstansiApprovals {
      kkpInstansi {
        id
        nama
        alamat
        keterangan
        logo
        is_activated
      }
    }
  }
`;
