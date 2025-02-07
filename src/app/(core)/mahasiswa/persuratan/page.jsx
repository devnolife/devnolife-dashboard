"use client";

import React, { useState } from "react";

// MUI Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Chip from "@mui/material/Chip";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function LetterRequestPage() {
  // State untuk pencarian, dialog, snackbar, dan form di dialog
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [selectedLetterType, setSelectedLetterType] = useState("");
  const [purpose, setPurpose] = useState("");

  // Data jenis surat menggunakan nama ikon Tabler
  const letterTypes = [
    {
      title: "Active Student Certificate",
      icon: "graduation-cap",
      description: "Official letter confirming your active student status",
    },
    {
      title: "Recommendation Letter",
      icon: "book-open",
      description: "Academic recommendation for further studies or employment",
    },
    {
      title: "Internship Letter",
      icon: "briefcase",
      description: "Letter for internship or practical work purposes",
    },
  ];

  // Data contoh untuk permintaan surat
  const letterRequests = [
    {
      id: "LTR001",
      type: "Active Student Certificate",
      submissionDate: "2024-02-08",
      status: "completed",
      purpose: "Scholarship Application",
    },
    {
      id: "LTR002",
      type: "Recommendation Letter",
      submissionDate: "2024-02-07",
      status: "processing",
      purpose: "Graduate School Application",
    },
    {
      id: "LTR003",
      type: "Internship Letter",
      submissionDate: "2024-02-06",
      status: "waiting",
      purpose: "Summer Internship Program",
    },
    {
      id: "LTR004",
      type: "Active Student Certificate",
      submissionDate: "2024-02-05",
      status: "rejected",
      purpose: "Bank Account Opening",
    },
  ];

  // Filter permintaan surat berdasarkan query pencarian
  const filteredRequests = letterRequests.filter(
    (request) =>
      request.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fungsi untuk submit permintaan surat
  const handleCreateRequest = () => {
    // Tambahkan logika submit ke API jika diperlukan
    setOpenDialog(false);
    setSnackbarMessage("Your letter request has been successfully submitted.");
    setSnackbarOpen(true);

    // Reset form dialog
    setSelectedLetterType("");
    setPurpose("");
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // Fungsi untuk memetakan status surat ke warna Chip MUI
  const getChipColor = (status) => {
    if (status === "completed") return "success";
    if (status === "processing") return "info";
    if (status === "waiting") return "warning";
    if (status === "rejected") return "error";

    return "default";
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box mb={4}>
        <Card sx={{ p: 2 }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography variant="h4" component="h1">
                Letter Request
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                Create and manage your official letter requests. You can request
                various types of letters such as active student certificates,
                recommendation letters, and more.
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<i className="tabler-icon tabler-icon-plus" />}
              onClick={() => setOpenDialog(true)}
            >
              Create Request
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Dialog untuk membuat permintaan baru */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Create New Letter Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details below to submit a new letter request.
          </DialogContentText>
          <Box component="form" sx={{ mt: 2 }} noValidate>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="letter-type-label">Letter Type</InputLabel>
              <Select
                labelId="letter-type-label"
                value={selectedLetterType}
                label="Letter Type"
                onChange={(e) => setSelectedLetterType(e.target.value)}
              >
                <MenuItem value="active">
                  Active Student Certificate
                </MenuItem>
                <MenuItem value="recommendation">
                  Recommendation Letter
                </MenuItem>
                <MenuItem value="internship">Internship Letter</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Purpose"
              placeholder="Explain the purpose of your request"
              multiline
              rows={4}
              fullWidth
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateRequest} variant="contained">
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>

      {/* Kartu jenis surat */}
      <Box
        mb={4}
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
        }}
        gap={2}
      >
        {letterTypes.map((type, index) => (
          <Card key={index} sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  p: 1,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className={`tabler-icon tabler-icon-${type.icon}`}
                  style={{ color: "white", fontSize: 24 }}
                />
              </Box>
              <Box>
                <Typography variant="h6">{type.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {type.description}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Tabel riwayat permintaan surat */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">Request History</Typography>
            <TextField
              placeholder="Search requests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <i className="tabler-icon tabler-icon-search" />
                  </InputAdornment>
                ),
              }}
              sx={{ width: 250 }}
              variant="outlined"
              size="small"
            />
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Request ID</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Submission Date</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.type}</TableCell>
                    <TableCell>{request.submissionDate}</TableCell>
                    <TableCell>{request.purpose}</TableCell>
                    <TableCell>
                      <Chip
                        label={
                          request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)
                        }
                        color={getChipColor(request.status)}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" gap={1}>
                        <IconButton color="primary">
                          <i className="tabler-icon tabler-icon-eye" />
                        </IconButton>
                        {request.status === "completed" && (
                          <IconButton color="primary">
                            <i className="tabler-icon tabler-icon-download" />
                          </IconButton>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Snackbar untuk notifikasi */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Container>
  );
}

export default LetterRequestPage;
