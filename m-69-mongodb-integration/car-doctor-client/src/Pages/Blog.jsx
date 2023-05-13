import React from 'react';
import Pdf from "react-to-pdf";
import { FaDotCircle } from "react-icons/fa";

const ref = React.createRef();
const Blog = () => {
    return (
        <div>
            <div className="py-28 bg-[url('https://cdn.pixabay.com/photo/2017/09/16/16/09/sea-2755908_960_720.jpg')] h-[50vh] relative z-80" >
                <div className='z-50 flex justify-around items-center'>
                    <div>
                        <h1 className=' text-3xl my-title'>What are the Questions in your mind?</h1>
                    </div>
                    <div className='text-right'>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf} title='Download pdf' className='my-btn text-black'>
                                Get Questions & Ans in PDF
                            </button>}
                        </Pdf>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-10'  ref={ref}>
                <div className='m-5 p-3 border'>
                    <h2 className='font-bold text-xl'>(Qs. No. 1) Tell us the differences between uncontrolled and controlled components</h2>
                    <p><span className='font-bold mr-3'>Ans:</span><span className='text-green-700 font-semibold my-3'>Differences between uncontrolled and controlled components: </span>
                    </p>
                    <div className='ml-12'>
                        <li> In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself.</li>
                        <li>Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.</li>
                        <li>With controlled components, we can validate as the input is being changed but the same is not possible with uncontrolled components.</li>
                    </div>
                       
                </div>
                <div className='m-5 p-3 border'>
                    <h2 className='font-bold text-xl'>(Qs. No. 2) How to validate React props using PropTypes?</h2>
                    <h4><span className='font-bold mr-3'>Ans:</span><span className='text-green-700 font-semibold mt-3'>Validate React props: </span></h4>
                    <div className='ml-10'>
                        <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.
                            <br />
                        We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app. <br />

                        Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. In this article, we’ll learn how to validate props with React PropTypes.</p>
                    </div>
                </div>
                <div className='m-5 p-3 border'>
                    <h2 className='font-bold text-xl'>(Qs. No. 3) Tell us the difference between nodejs and express js.</h2>
                    <p><span className='font-bold mr-3'>Ans:</span><span className='text-green-700 font-semibold my-3'>Difference between nodejs and express js:</span></p>

                    <div className="">
                        <table className="table  ml-10 mr-5 my-3 shadow-xl">
                            {/* head*/}
                            <thead className='border'>
                            <tr className='text-center'>
                                <th className=' text-base font-bold '>Feature</th>
                                <th className=' text-base font-bold '>Express.js</th>
                                <th className=' text-base font-bold '>Node.js</th>
                            </tr>
                            </thead>
                            <tbody className='border'>
                            {/* row 1 */}
                            <tr>
                                <td>Usage</td>
                                <td>It is used to build web-apps using approaches and principles of Node.js.</td>
                                <td> It is used to build server-side, input-output, event-driven apps.</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Level of features</td>
                                <td>More features than Node.js.</td>
                                <td>Fewer features.</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Building Block</td>
                                <td>JavaScript</td>
                                <td>C, C++, JavaScript</td>
                            </tr>
                            <tr>
                                <td>Framework/Platform</td>
                                <td>Framework based on Node.js.</td>
                                <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
                            </tr>
                            <tr>
                                <td>Controllers</td>
                                <td>Controllers are provided.</td>
                                <td>Controllers are not provided.</td>
                            </tr>
                            <tr>
                                <td>Routing</td>
                                <td>Routing is provided.</td>
                                <td>Routing is provided.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className='m-5 p-3 border'>
                    <h2 className='font-bold text-xl'>(Qs. No. 4) What is a custom hook, and why will you create a custom hook?</h2>
                    <p><span className='font-bold mr-3'>Ans:</span><span className='text-green-700 font-semibold my-3'>Custom hook:</span></p>
                    <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.</p>
                    <div>
                        <h1>Here are some reasons why you might want to create a custom hook:</h1>
                        <div className='flex my-3'>
                            <p className='mr-3'>1</p>
                            <p><span className='font-bold'>Reusability:</span> If you have a piece of code that is used in multiple components, you can extract that code into a custom hook and reuse it across those components. This can help reduce code duplication and make your code more modular and maintainable.</p>
                        </div>   
                        <div className='flex'>
                            <p className='mr-3'>2</p>
                            <p><span className='font-bold'>Separation of concerns:</span> By extracting logic into a custom hook, you can separate concerns and make your code easier to reason about. This can make it easier to understand and maintain your code over time.</p>
                        </div>
                        <div className='flex my-3'>
                            <p className='mr-3'>3</p>
                            <p><span className='font-bold'>Abstraction:</span> Custom hooks can help abstract away complex logic and provide a simpler and more declarative API to your components. This can make it easier to use and reason about your code, especially for other developers who might be working on your project.</p>
                        </div>
                        <div className='flex'>
                            <p className='mr-3'>4</p>
                            <p><span className='font-bold'>Testing:</span> Custom hooks can also make it easier to test your code. By separating logic into a custom hook, you can write more focused tests that test the specific behavior of that hook, rather than having to test the behavior of multiple components at once.</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Blog;