
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';

export async function getServerSideProps(context) 
{
    const {id} = context.query;

    return{
        props:
        {
            name: id
        }
    }
}

const Index = ({name}) =>
{
    console.log(name)
    return (
        <p>{name.id}</p>
    )
}

export default Index;