
const AddBlogs = () => {
    const testFunc = () => {
        fetch('http://localhost:5000/allComment', {
            method: "post",
            headers: {
                "content-type":'application/json'
            },
            body:JSON.stringify({name:'hasan'})
        }).then(res => res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            <button onClick={testFunc}>submit</button>
        </div>
    );
};

export default AddBlogs;