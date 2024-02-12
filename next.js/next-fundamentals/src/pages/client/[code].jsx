import { useEffect } from 'react'
import Layout from'../../components/Layout'
import{useRouter} from 'next/router'

export default function ClientCode(){
    const router = useRouter()
    return(
        <Layout title="Dynamic Navigation">
            <span>
                Code= {router.query.code}
            </span>
        </Layout>
    )
}