import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { username, password } = await req.json()

    const users = {
      admin: { username: 'admin', password: 'admin123' },
      student: { username: 'mahasiswa', password: 'mahasiswa123' },
      faculty: { username: 'fakultas', password: 'fakultas123' },
      studyProgram: { username: 'prodi', password: 'prodi123' },
      administration: { username: 'tatausaha', password: 'tatausaha123' }
    }

    let foundRole = null

    for (const role in users) {
      if (
        users[role].username === username &&
        users[role].password === password
      ) {
        foundRole = role
        break
      }
    }

    if (foundRole) {
      return NextResponse.json({ message: `Logged in as ${foundRole}`, user: { role: foundRole } })
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
  } catch (e) {
    return NextResponse.error(e)
  }
}
