export default function InfoCard({ array }) {
    return (<>
        {array.map((text, index) => <p key={index}>{text}</p> )}
    </>)
}