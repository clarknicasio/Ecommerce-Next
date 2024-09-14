import UpdateForm from "../../../ui/admin/updateForm";

const UpdatePage = ({ params }) => {

    const { id } = params;

    console.log('Id del producto '+id)
    return (
        <div>
            <UpdateForm id={id}/>
        </div>
    )
}

export default UpdatePage;