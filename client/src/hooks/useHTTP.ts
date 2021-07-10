import { useState, useEffect } from "react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:6060"

export const useHTTP = (url: string, method: "post" | "get", body = undefined, headers = undefined) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    axios[method](url, headers, body)
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  })

  return { response, error, loading }
}
