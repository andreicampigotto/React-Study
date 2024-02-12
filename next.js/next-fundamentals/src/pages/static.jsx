import Layout from '../components/Layout'

export function getStaticProps(){
    return {
        props:{
            num: Math.random()
        }
    }

}

export default function Static(props){
    return(
        <Layout title="Static content" >
            <div>
                {props.num}
            </div>
        </Layout>
    )
}