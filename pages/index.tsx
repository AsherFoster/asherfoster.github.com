import Link from 'next/link'
import Layout from "../components/MyLayout";

const PostLink = (props) => (
    <li>
        <Link as={'/p/' + props.id} href={'/post?title=' + props.title}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        <h1>It's a blog!</h1>
        <ul>
            <PostLink id="hello" title="Hello" />
            <PostLink id="beep" title="Beep" />
            <PostLink id="boop" title="Boop" />
        </ul>
    </Layout>
);

export default Index;
