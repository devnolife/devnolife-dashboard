export default function handler(req, res) {
  const { role } = req.body

  const users = {
    admin: { username: 'admin', password: 'admin123' },
    student: { username: 'student', password: 'student123' },
    faculty: { username: 'faculty', password: 'faculty123' },
    studyProgram: { username: 'studyProgram', password: 'studyProgram123' },
    administration: { username: 'administration', password: 'administration123' }
  }

  if (users[role]) {
    res.status(200).json({ message: `Logged in as ${role}`, user: users[role] })
  } else {
    res.status(400).json({ message: 'Invalid role' })
  }
}
