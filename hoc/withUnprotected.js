import { useRouter } from "next/router";
import { useUser } from "../context/user";
import { useState, React } from 'react'

const withUnprotected = (Pages) => {
    return (props) => {
      const router = useRouter()
      const user = useUser()
      const {uid} = user

      if (uid) {
          router.replace('/')
          return <></>
      }

      return <Pages {...props} />
  }
}

export default withUnprotected