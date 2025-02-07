// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { Grid, Card, Box, Typography, Button } from '@mui/material'

// // Contoh data
// const bannerData = {
//   title: 'Check your current and upcoming activities here',
//   description:
//     'Check the activities you are currently doing and other upcoming activities',
//   btnText: 'View Calendar',
//   // Ganti path ini dengan ilustrasi Anda
//   imgSrc: '/images/banner-activities.png'
// }

// export default function BannerActivities() {
//   return (
//     <Grid
//       container
//       sx={{
//         // Warna latar (pastel) di luar Card
//         backgroundColor: '#F2FAF3',
//         // Tambahkan padding top/bottom agar ada ruang di atas/bawah banner
//         py: { xs: 4, md: 6 },
//         px: { xs: 2, md: 5 }
//       }}
//     >
//       <Grid item xs={12}>
//         <Card
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             // Supaya Card tampak penuh (seperti banner) namun tetap ada jarak
//             borderRadius: 4,
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             // Jika mau Card langsung berwarna pastel,
//             // bisa gunakan backgroundColor di sini juga, mis. '#E5F6EB'
//             backgroundColor: '#FFFFFF',
//             px: { xs: 3, md: 5 },
//             py: { xs: 3, md: 5 },
//             // Lebar penuh
//             width: '100%'
//           }}
//         >
//           {/* Sisi kiri: Teks dan Tombol */}
//           <Box sx={{ flex: 1, pr: { xs: 2, md: 5 } }}>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
//               {bannerData.title}
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{ color: 'text.secondary', mb: 3 }}
//             >
//               {bannerData.description}
//             </Typography>

//             <Button
//               variant="contained"
//               color="success"
//               size="large"
//               sx={{ borderRadius: 2 }}
//             >
//               {bannerData.btnText}
//             </Button>
//           </Box>

//           {/* Sisi kanan: Ilustrasi/Gambar */}
//           <Box
//             sx={{
//               position: 'relative',
//               width: { xs: 180, md: 280 },
//               height: { xs: 180, md: 280 }
//             }}
//           >
//             <Image
//               src={bannerData.imgSrc}
//               alt="Activities illustration"
//               fill
//               style={{ objectFit: 'contain' }}
//             />
//           </Box>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }
