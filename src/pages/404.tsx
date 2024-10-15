import React, { useEffect } from "react"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    const path = window.location.pathname
    if (path === "/docs" || path === "/docs/") {
      navigate("/docs/getting-started-with-open-data-hub")
    } else {
      navigate("/") // or to any default 404 page
    }
  }, [])

  return <div>Redirecting...</div>
}

export default NotFoundPage
