import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export async function action({ params }) {
    try {
        await customFetch.delete(`/jobs/${params.id}`);
        toast.success('Job deleted successfully');
    } catch (error) {
        toast.error(error.response.data.msg);
    }
    return redirect('/dashboard/all-jobs');
}

//no need to make a jsx if not needed in latest react functionality.
// const DeleteJob = () => {
//     return (
//         <h3>DeleteJOb</h3>
//     )
// }
//
// export default DeleteJob;
