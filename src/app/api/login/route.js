import { NextResponse } from "next/server"

export async function POST(req, res) {

  try {
    const { role } = await req.json()

    const users = {
      admin: { username: 'admin', password: 'admin123' },
      student: { username: 'mahasiswa', password: 'mahasiswa123' },
      faculty: { username: 'fakultas', password: 'fakultas123' },
      studyProgram: { username: 'prodi', password: 'prodi123' },
      administration: { username: 'tatausaha', password: 'tatausaha123' }
    }

    if (users[role]) {
      return NextResponse.son({ message: `Logged in as ${role}`, user: users[role] })
    } else {
      return NextResponse.error(new Error('Invalid role'))
    }

  } catch (e) {
    return NextResponse.error(e)
  }

}
