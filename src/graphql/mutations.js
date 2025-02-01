import { gql } from "@apollo/client";


export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      access_token
    }
  }
`;


export const SIGNIN = gql`
  mutation Signin($loginUserInput: SigninUserInput!) {
    signin(loginUserInput: $loginUserInput) {
      access_token
    }
  }
`;


export const CREATE_KKP = gql`
  mutation CreateKkp($input: CreateKkpInput!) {
    createKkp(input: $input) {
      id
      prodi_kode_prodi
      no_surat
      tanggal_surat
      no_sk_kkp
      tanggal_sk_kkp
      instansi
      tempat
      mahasiswa_nim_ketua
      dosen_nidn_pembimbing_prodi
      nama_pembimbing_lapangan
      keterangan
      created_by
      updated_by
      created_at
      updated_at
    }
  }
`;


export const CREATE_KKP_APPROVAL = gql`
  mutation CreateKkpApproval($input: CreateKkpApprovalInput!) {
    createKkpApproval(input: $input) {
      id
      tanggal_jam
      keterangan
      approvalStatus {
        id
        nama
      }
      kkp {
        id
      }
    }
  }
`;


export const CREATE_PRODI = gql`
  mutation CreateProdi($createProdiInput: CreateProdiInput!) {
    createProdi(createProdiInput: $createProdiInput) {
      id
      kode_fakultas
      kode_prodi
      nama_prodi
      nama_prodi_eng
      gelar_pendek
      gelar_panjang
      gelar_eng
      total_sks_lulus
      nidn_ketua_prodi
    }
  }
`;


export const UPDATE_PRODI = gql`
  mutation UpdateProdi($updateProdiInput: UpdateProdiInput!) {
    updateProdi(updateProdiInput: $updateProdiInput) {
      id
      kode_fakultas
      kode_prodi
      nama_prodi
      nama_prodi_eng
      gelar_pendek
      gelar_panjang
      gelar_eng
      total_sks_lulus
      nidn_ketua_prodi
    }
  }
`;


export const REMOVE_PRODI = gql`
  mutation RemoveProdi($id: Float!) {
    removeProdi(id: $id) {
      id
      kode_fakultas
      kode_prodi
      nama_prodi
    }
  }
`;


export const CREATE_KKP_SYARAT = gql`
  mutation CreateKkpSyarat($input: CreateKkpSyaratInput!) {
    createKkpSyarat(input: $input) {
      id
      prodi_kode_prodi
      nama
      logo
      url_check
      response_should_be
      is_upload_file
      is_activated
      created_by
      created_at
    }
  }
`;


export const UPDATE_KKP_SYARAT = gql`
  mutation UpdateKkpSyarat($id: String!, $input: UpdateKkpSyaratInput!) {
    updateKkpSyarat(id: $id, input: $input) {
      id
      prodi_kode_prodi
      nama
      logo
      url_check
      response_should_be
      is_upload_file
      is_activated
      created_by
      updated_by
      updated_at
    }
  }
`;


export const REMOVE_KKP_SYARAT = gql`
  mutation RemoveKkpSyarat($id: String!) {
    removeKkpSyarat(id: $id) {
      id
      prodi_kode_prodi
      nama
    }
  }
`;


export const AJUKAN_KKP_INSTANSI = gql`
  mutation AjukanKkpInstansi($createKkpInstansiInput: CreateKkpInstansiInput!) {
    ajukanKkpInstansi(createKkpInstansiInput: $createKkpInstansiInput) {
      id
      nama
      alamat
      logo
      keterangan
      is_activated
      created_by
      updated_by
      created_at
      updated_at
    }
  }
`;


export const CREATE_KKP_INSTANSI_APPROVAL = gql`
  mutation CreateKkpInstansiApproval($input: CreateKkpInstansiApprovalInput!) {
    createKkpInstansiApproval(input: $input) {
      id
      kkp_instansi_id
      approval_status_id
      keterangan
      created_by
      updated_by
      created_at
      updated_at
      kkpInstansi {
        id
        nama
      }
      approvalStatus {
        id
        nama
      }
    }
  }
`;


export const CREATE_KKP_INSTANSI_BAGIAN = gql`
  mutation CreateKkpInstansiBagian($createKkpInstansiBagianInput: CreateKkpInstansiBagianInput!) {
    createKkpInstansiBagian(createKkpInstansiBagianInput: $createKkpInstansiBagianInput) {
      id
      kkp_instansi_id
      nama
      alamat
      keterangan
      is_activated
    }
  }
`;


export const UPDATE_KKP_INSTANSI_BAGIAN = gql`
  mutation UpdateKkpInstansiBagian($id: String!, $updateKkpInstansiBagianInput: UpdateKkpInstansiBagianInput!) {
    updateKkpInstansiBagian(id: $id, updateKkpInstansiBagianInput: $updateKkpInstansiBagianInput) {
      id
      kkp_instansi_id
      nama
      alamat
      keterangan
      is_activated
    }
  }
`;


export const REMOVE_KKP_INSTANSI_BAGIAN = gql`
  mutation RemoveKkpInstansiBagian($id: String!) {
    removeKkpInstansiBagian(id: $id) {
      id
      nama
    }
  }
`;


export const CREATE_KKP_INSTANSI_BAGIAN_APPROVAL = gql`
  mutation CreateKkpInstansiBagianApproval($createKkpInstansiBagianApprovalInput: CreateKkpInstansiBagianApprovalInput!) {
    createKkpInstansiBagianApproval(createKkpInstansiBagianApprovalInput: $createKkpInstansiBagianApprovalInput) {
      id
      kkp_instansi_bagian_id
      approval_status_id
      keterangan
      created_by
      updated_by
      created_at
      updated_at
      kkpInstansiBagian {
        id
        nama
      }
      approvalStatus {
        id
        nama
      }
    }
  }
`;


export const UPDATE_KKP_INSTANSI_BAGIAN_APPROVAL = gql`
  mutation UpdateKkpInstansiBagianApproval($id: String!, $updateKkpInstansiBagianApprovalInput: UpdateKkpInstansiBagianApprovalInput!) {
    updateKkpInstansiBagianApproval(id: $id, updateKkpInstansiBagianApprovalInput: $updateKkpInstansiBagianApprovalInput) {
      id
      kkp_instansi_bagian_id
      approval_status_id
      keterangan
      created_by
      updated_by
      created_at
      updated_at
      kkpInstansiBagian {
        id
        nama
      }
      approvalStatus {
        id
        nama
      }
    }
  }
`;


export const REMOVE_KKP_INSTANSI_BAGIAN_APPROVAL = gql`
  mutation RemoveKkpInstansiBagianApproval($id: String!) {
    removeKkpInstansiBagianApproval(id: $id) {
      id
      kkp_instansi_bagian_id
      approval_status_id
    }
  }
`;


export const CREATE_KKP_MAHASISWA_SYARAT_KELENGKAPAN = gql`
  mutation CreateKkpMahasiswaSyaratKelengkapan($createKkpMahasiswaSyaratKelengkapanInput: CreateKkpMahasiswaSyaratKelengkapanInput!) {
    createKkpMahasiswaSyaratKelengkapan(createKkpMahasiswaSyaratKelengkapanInput: $createKkpMahasiswaSyaratKelengkapanInput) {
      id
      kkp_mahasiswa_syarat_id
      uploaded_file_id
      get_response
      get_approved
      keterangan
      created_by
      updated_by
      created_at
      updated_at
    }
  }
`;


export const CREATE_KKP_MAHASISWA_SYARAT_KELENGKAPAN_APPROVAL = gql`
  mutation CreateKkpMahasiswaSyaratKelengkapanApproval($createKkpMahasiswaSyaratKelengkapanApprovalInput: CreateKkpMahasiswaSyaratKelengkapanApprovalInput!) {
    createKkpMahasiswaSyaratKelengkapanApproval(createKkpMahasiswaSyaratKelengkapanApprovalInput: $createKkpMahasiswaSyaratKelengkapanApprovalInput) {
      id
      kkp_mahasiswa_syarat_kelengkapan_id
      approval_status_id
      keterangan
      created_by
      updated_by
      created_at
      updated_at
      kkpMahasiswaSyaratKelengkapan {
        id
      }
      approvalStatus {
        id
        nama
      }
    }
  }
`;


export const UPDATE_KKP_MAHASISWA_SYARAT_KELENGKAPAN_APPROVAL = gql`
  mutation UpdateKkpMahasiswaSyaratKelengkapanApproval($id: String!, $updateKkpMahasiswaSyaratKelengkapanApprovalInput: UpdateKkpMahasiswaSyaratKelengkapanApprovalInput!) {
    updateKkpMahasiswaSyaratKelengkapanApproval(
      id: $id
      updateKkpMahasiswaSyaratKelengkapanApprovalInput: $updateKkpMahasiswaSyaratKelengkapanApprovalInput
    ) {
      id
      kkp_mahasiswa_syarat_kelengkapan_id
      approval_status_id
      keterangan
      created_by
      updated_by
      created_at
      updated_at
      kkpMahasiswaSyaratKelengkapan {
        id
      }
      approvalStatus {
        id
        nama
      }
    }
  }
`;


export const REMOVE_KKP_MAHASISWA_SYARAT_KELENGKAPAN_APPROVAL = gql`
  mutation RemoveKkpMahasiswaSyaratKelengkapanApproval($id: String!) {
    removeKkpMahasiswaSyaratKelengkapanApproval(id: $id) {
      id
      kkp_mahasiswa_syarat_kelengkapan_id
      approval_status_id
    }
  }
`;
