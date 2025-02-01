import { gql } from "@apollo/client";


export const SAY_HELLO = gql`
  query SayHello {
    sayHello
  }
`;


export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      username
      fullname
      department
      role
    }
  }
`;


export const GET_ALL_MAHASISWAS = gql`
  query GetAllMahasiswas {
    getAllMahasiswas {
      nim
      nama
      prodi_kode_prodi
      is_activated
      created_by
      updated_by
      created_at
      updated_at
      last_sync
      keterangan
    }
  }
`;


export const GET_MAHASISWA = gql`
  query GetMahasiswa($nim: String!) {
    getMahasiswa(nim: $nim) {
      nim
      nama
      prodi_kode_prodi
      is_activated
      created_by
      updated_by
      created_at
      updated_at
      last_sync
      keterangan
    }
  }
`;


export const GET_ALL_KKPS = gql`
  query GetAllKkps {
    getAllKkps {
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
      approvals {
        id
        tanggal_jam
        keterangan
        approvalStatus {
          id
          nama
        }
      }
    }
  }
`;


export const GET_KKP = gql`
  query GetKkp($id: String!) {
    getKkp(id: $id) {
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
      approvals {
        id
        tanggal_jam
        keterangan
        approvalStatus {
          id
          nama
        }
      }
    }
  }
`;


export const GET_ALL_APPROVAL_STATUSES = gql`
  query GetAllApprovalStatuses {
    getAllApprovalStatuses {
      id
      nama
      keterangan
    }
  }
`;


export const GET_ALL_KKP_APPROVALS = gql`
  query GetAllKkpApprovals {
    getAllKkpApprovals {
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


export const GET_KKP_APPROVAL = gql`
  query GetKkpApproval($id: String!) {
    getKkpApproval(id: $id) {
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


export const GET_ALL_KKP_MAHASISWAS = gql`
  query GetAllKkpMahasiswas {
    getAllKkpMahasiswas {
      id
      mahasiswa_nim
      keterangan
      created_by
      updated_by
      created_at
      updated_at
      mahasiswa {
        nim
        nama
      }
      syarat {
        id
        kkp_syarat_id
      }
    }
  }
`;


export const GET_KKP_MAHASISWA = gql`
  query GetKkpMahasiswa($id: String!) {
    getKkpMahasiswa(id: $id) {
      id
      mahasiswa_nim
      keterangan
      created_by
      updated_by
      created_at
      updated_at
      mahasiswa {
        nim
        nama
      }
      syarat {
        id
        kkp_syarat_id
      }
    }
  }
`;


export const GET_MAHASISWA_KKP_SYARAT_WITH_APPROVAL = gql`
  query GetMahasiswaKkpSyaratWithApproval($nim: String!) {
    getMahasiswaKkpSyaratWithApproval(nim: $nim) {
      mahasiswa_nim
      syarat_id
      syarat_nama
      latest_kelengkapan {
        kelengkapan_id
        uploaded_file_id
        keterangan
        updated_at
      }
      latest_approval {
        approval_id
        approval_status_id
        approval_status_nama
        updated_at
      }
    }
  }
`;


export const GET_ALL_APPROVED_MAHASISWA = gql`
  query GetAllApprovedMahasiswa {
    getAllApprovedMahasiswa {
      kkpMahasiswaid
      nim
      nama
      prodi
    }
  }
`;


export const GET_ALL_APPROVED_MAHASISWA_STATS = gql`
  query GetAllApprovedMahasiswaStats {
    getAllApprovedMahasiswaStats {
      kkpMahasiswaId
      nim
      nama
      prodi
      persentaseSyaratDisetujui
      jumlahSyaratDisetujui
      jumlahSyarat
    }
  }
`;


export const CEK_KKP_MAHASISWA = gql`
  query CekKkpMahasiswa($nim: String!) {
    cekKkpMahasiswa(nim: $nim)
  }
`;


export const GET_ALL_FAKULTAS = gql`
  query GetAllFakultas {
    getAllFakultas {
      id
      status
      kode_fakultas
      nama_fakultas
      nama_fakultas_eng
      nama_alias
      dekan
      prodi {
        id
        kode_fakultas
        kode_prodi
        nama_prodi
      }
    }
  }
`;


export const GET_FAKULTAS = gql`
  query GetFakultas($id: Int!) {
    getFakultas(id: $id) {
      id
      status
      kode_fakultas
      nama_fakultas
      nama_fakultas_eng
      nama_alias
      dekan
      prodi {
        id
        kode_fakultas
        kode_prodi
        nama_prodi
      }
    }
  }
`;


export const GET_ALL_PRODIS = gql`
  query GetAllProdis {
    getAllProdis {
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
      fakultas {
        id
        nama_fakultas
      }
      mahasiswa {
        nim
        nama
      }
    }
  }
`;


export const GET_PRODI = gql`
  query GetProdi($id: Float!) {
    getProdi(id: $id) {
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
      fakultas {
        id
        nama_fakultas
      }
      mahasiswa {
        nim
        nama
      }
    }
  }
`;


export const GET_PRODI_BY_KODE_PRODI = gql`
  query GetProdiByKodeProdi($kodeProdi: String!) {
    getProdiByKodeProdi(kodeProdi: $kodeProdi) {
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
      fakultas {
        id
        nama_fakultas
      }
      mahasiswa {
        nim
        nama
      }
    }
  }
`;


export const GET_ALL_KKP_SYARAT = gql`
  query GetAllKkpSyarat {
    getAllKkpSyarat {
      id
      prodi_kode_prodi
      nama
      logo
      url_check
      response_should_be
      is_upload_file
      is_activated
      is_deleted
      created_by
      updated_by
      created_at
      updated_at
      KkpMahasiswaSyarat {
        id
        kkp_syarat_id
      }
    }
  }
`;


export const GET_KKP_SYARAT_BY_KODE_PRODI = gql`
  query GetKkpSyaratByKodeProdi($kodeProdi: String!) {
    getKkpSyaratByKodeProdi(kodeProdi: $kodeProdi) {
      id
      prodi_kode_prodi
      nama
      logo
      url_check
      response_should_be
      is_upload_file
      is_activated
      is_deleted
      created_by
      updated_by
      created_at
      updated_at
    }
  }
`;


export const GET_KKP_SYARAT = gql`
  query GetKkpSyarat($id: String!) {
    getKkpSyarat(id: $id) {
      id
      prodi_kode_prodi
      nama
      logo
      url_check
      response_should_be
      is_upload_file
      is_activated
      is_deleted
      created_by
      updated_by
      created_at
      updated_at
      KkpMahasiswaSyarat {
        id
        kkp_syarat_id
      }
    }
  }
`;


export const GET_KKP_MAHASISWA_SYARAT = gql`
  query GetKkpMahasiswaSyarat($id: String!) {
    getKkpMahasiswaSyarat(id: $id) {
      id
      kkp_mahasiswa_syarat_id
      kkp_syarat_id
      created_by
      updated_by
      created_at
      updated_at
      kkpMahasiswa {
        id
        mahasiswa_nim
      }
      kkpSyarat {
        id
        nama
      }
      kelengkapan {
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
  }
`;


export const GET_APPROVAL_TIMELINE = gql`
  query GetApprovalTimeline($nim: String!, $kkp_syarat_id: String!) {
    getApprovalTimeline(nim: $nim, kkp_syarat_id: $kkp_syarat_id) {
      id
      kkp_mahasiswa_syarat_id
      kkp_syarat_id
      created_by
      updated_by
      created_at
      updated_at
      kkpMahasiswa {
        id
        mahasiswa_nim
      }
      kkpSyarat {
        id
        nama
      }
      kelengkapan {
        id
        uploaded_file_id
        get_response
        get_approved
        keterangan
        created_at
      }
    }
  }
`;


export const GET_ALL_KKP_INSTANSI = gql`
  query GetAllKkpInstansi {
    getAllKkpInstansi {
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
      approvals {
        id
        approval_status_id
        keterangan
        created_at
      }
      latest_approval_status_id
      latest_approval_status
      latest_approval_keterangan
      latest_approval_created_at
    }
  }
`;


export const GET_KKP_INSTANSI = gql`
  query GetKkpInstansi($id: String!) {
    getKkpInstansi(id: $id) {
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
      approvals {
        id
        approval_status_id
        keterangan
        created_at
      }
      latest_approval_status_id
      latest_approval_status
      latest_approval_keterangan
      latest_approval_created_at
    }
  }
`;


export const GET_ALL_APPROVED_INSTANSI = gql`
  query GetAllApprovedInstansi {
    getAllApprovedInstansi {
      id
      nama
      alamat
      logo
      approval_status_id
      latest_keterangan
      approval_status
    }
  }
`;


export const GET_ALL_KKP_INSTANSI_APPROVALS = gql`
  query GetAllKkpInstansiApprovals {
    getAllKkpInstansiApprovals {
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


export const GET_KKP_INSTANSI_APPROVAL = gql`
  query GetKkpInstansiApproval($id: String!) {
    getKkpInstansiApproval(id: $id) {
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


export const GET_ALL_KKP_INSTANSI_BAGIANS = gql`
  query GetAllKkpInstansiBagians {
    getAllKkpInstansiBagians {
      id
      kkp_instansi_id
      nama
      alamat
      keterangan
      approvals {
        id
        approval_status_id
        keterangan
        created_at
      }
      latest_approval_status_id
      latest_approval_status
      latest_approval_keterangan
      latest_approval_created_at
      kkpInstansi {
        id
        nama
      }
    }
  }
`;


export const GET_KKP_INSTANSI_BAGIAN = gql`
  query GetKkpInstansiBagian($id: String!) {
    getKkpInstansiBagian(id: $id) {
      id
      kkp_instansi_id
      nama
      alamat
      keterangan
      approvals {
        id
        approval_status_id
        keterangan
        created_at
      }
      latest_approval_status_id
      latest_approval_status
      latest_approval_keterangan
      latest_approval_created_at
      kkpInstansi {
        id
        nama
      }
    }
  }
`;


export const GET_ALL_KKP_INSTANSI_BAGIAN_APPROVALS = gql`
  query GetAllKkpInstansiBagianApprovals {
    getAllKkpInstansiBagianApprovals {
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


export const GET_KKP_INSTANSI_BAGIAN_APPROVAL = gql`
  query GetKkpInstansiBagianApproval($id: String!) {
    getKkpInstansiBagianApproval(id: $id) {
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


export const GET_KKP_MAHASISWA_SYARAT_KELENGKAPAN = gql`
  query GetKkpMahasiswaSyaratKelengkapan($id: String!) {
    getKkpMahasiswaSyaratKelengkapan(id: $id) {
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
      kkpMahasiswaSyarat {
        id
        kkp_syarat_id
      }
      approvals {
        id
        approval_status_id
        keterangan
        created_at
      }
    }
  }
`;


export const GET_ALL_KKP_MAHASISWA_SYARAT_KELENGKAPAN_APPROVALS = gql`
  query GetAllKkpMahasiswaSyaratKelengkapanApprovals {
    getAllKkpMahasiswaSyaratKelengkapanApprovals {
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


export const GET_KKP_MAHASISWA_SYARAT_KELENGKAPAN_APPROVAL = gql`
  query GetKkpMahasiswaSyaratKelengkapanApproval($id: String!) {
    getKkpMahasiswaSyaratKelengkapanApproval(id: $id) {
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
