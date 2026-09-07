import Experience from './sections/Experience.jsx'

export default function App() {
    return (
        <>
            <h1>Anita Li</h1>
            <Experience id ='wexperience' title='Test' experiences={[
                { title: "Work 1", description: 'Test 2', tags: ['Tag 1', 'Tag 2'] }
            ]}/>
        </>
    )
}