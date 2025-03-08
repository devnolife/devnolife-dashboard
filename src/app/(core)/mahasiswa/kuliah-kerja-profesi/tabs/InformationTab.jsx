import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const InformationTab = () => {
  return (
    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1, p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
        KKP & Plus Overview
      </Typography>
      <Typography variant="body1" paragraph>
        Comprehensive guide and essential information regarding the execution of the KKP & Plus program
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
        What is KKP?
      </Typography>
      <Typography variant="body1" paragraph>
        Kuliah Kerja Profesi (KKP) is a professional work-study program designed to provide students with real-world experience in their field of study. It combines academic learning with practical application in a professional environment, allowing students to develop industry-relevant skills and build professional networks.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
        KKP Program
      </Typography>
      <Typography variant="body1" paragraph>
        The standard KKP program requires students to complete a minimum of 320 hours of professional work experience at an approved organization. Students work under the supervision of both a faculty advisor and an industry mentor, applying theoretical knowledge to practical situations and developing professional competencies.
      </Typography>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<i className="tabler-download" />}
        >
          Download Complete KKP Guidelines
        </Button>
      </Box>
    </Box>
  )
}

export default InformationTab
