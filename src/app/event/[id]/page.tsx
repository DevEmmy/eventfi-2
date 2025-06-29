import EventDetailPage from "@/components/Pages/EventDetailPage";

import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <EventDetailPage eventId={id} />
  )
}

export default page