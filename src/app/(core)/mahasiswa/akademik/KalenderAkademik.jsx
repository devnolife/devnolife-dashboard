import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const KalenderAkademik = () => {
  return (
    <>
      <AppReactDatepicker
        inline
        selected={new Date()}
        boxProps={{
          className: 'flex justify-center is-full',
          sx: { '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' } }
        }}
      />
    </>
  )
}

export default KalenderAkademik
