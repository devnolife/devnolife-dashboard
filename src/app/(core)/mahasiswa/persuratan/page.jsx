"use client";

import React from "react";

import Container from "@mui/material/Container";

import HistoryPersuratan from '@views/mahasiswa/akademik/Persuratan/HistoryTable';


const Page = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <HistoryPersuratan />
    </Container>
  );
}

export default Page;
