function RemainingMessage(props){
    const {remaining, total} = props
    return (
        <div className="mt-4 bt-4 py-3 text-center bg-dark text-white">
            {remaining} out of {total} Remaining
        </div>
    )
}

export default RemainingMessage