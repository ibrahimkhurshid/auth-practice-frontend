
const Home = (props: { name: string }) => {

    return (
        <div>{props.name ? `hello ${props.name}` : `Log in to continue`}</div>
    )
}

export default Home