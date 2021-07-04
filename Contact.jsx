import React, { useState } from 'react'

const Contact = () => {
    const [data, setdata] = useState({
        fullname: "",
        number: "",
        email: "",
        msg: "",

    })
    const inputEvent = (event) => {
        const { name, value } = event.target
        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formsubmilt = (e) => {
        e.preventDefault()
        alert(`My name is ${data.fullname}.My Phone is ${data.number}.My email is ${data.email}.My message is ${data.msg}.`)
    }
    return (
        <>

            <div className="my-5">
                <h1 className="text-center text-dark ">Contact Me</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto ">
                        <form onSubmit={formsubmilt}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1"
                                    className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1"
                                    className="form-label">Full Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Full Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1"
                                    className="form-label">Phone</label>
                                <input type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="number"
                                    value={data.number}
                                    onChange={inputEvent}
                                    placeholder="Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1"
                                    className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={inputEvent}>

                                </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>

                        </form>


                    </div>

                </div>
            </div>

        </>
    )
}
export default Contact