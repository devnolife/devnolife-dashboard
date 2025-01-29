'use client'

import { useState, useEffect } from 'react'

import { redirect } from 'next/navigation'

import Preview from '@/views/mahasiswa/akademik/kartu-kontrol'


const dataPa = {
  'Semester 1': [
    {
      no: '1',
      uraian: 'Rencana studi dan tujuan akademik',
      date: '12 Januari 2024',
      paraf: 'Sudah',
      keterangan: 'Pertemuan pengantar dan penetapan tujuan.'
    },
    {
      no: '2',
      uraian: 'Pemilihan mata kuliah dan pengembangan kompetensi',
      date: '19 Februari 2024',
      paraf: 'Sudah',
      keterangan: 'Diskusi mendalam mengenai pilihan mata kuliah.'
    },
    {
      no: '3',
      uraian: 'Evaluasi tengah semester dan kemajuan akademik',
      date: '10 Maret 2024',
      paraf: 'Belum',
      keterangan: 'Tinjauan kemajuan dan rencana perbaikan.'
    },
    {
      no: '4',
      uraian: 'Rencana studi untuk semester berikutnya',
      date: '25 April 2024',
      paraf: 'Belum',
      keterangan: 'Persiapan untuk semester mendatang.'
    }
  ],
  'Semester 2': [
    {
      no: '1',
      uraian: 'Persiapan untuk evaluasi semester',
      date: '15 Februari 2024',
      paraf: 'Belum',
      keterangan: 'Review hasil studi dan progress.'
    }
  ]
}

const mahasiswa = {
  nama: 'John Doe',
  nim: '1234567890',
  penasehat_akademik: 'Dr. Jane Doe',
  tahun_akademik: '2023/2024',
}

const signature = {
  tanggal: '25 November 2024',
  namaProdi: 'Informatika',
  namaKetuaProdi: 'Muhyiddin AM.Hayat, S.Kom., MT',
  nbm: '1504 577',
};

const PenasehatAkademik = () => {
  const [selectedSemester, setSelectedSemester] = useState('Semester 1')
  const [filteredData, setFilteredData] = useState(dataPa['Semester 1'])

  useEffect(() => {
    const data = dataPa[selectedSemester]

    if (!data) {
      redirect('/not-found')
    } else {
      setFilteredData(data)
    }
  }, [selectedSemester])

  return (
    <Preview
      signature={signature}
      mahasiswa={mahasiswa}
      data={filteredData}
      semester={selectedSemester}
      onSemesterChange={setSelectedSemester}
    />
  )
}

export default PenasehatAkademik
