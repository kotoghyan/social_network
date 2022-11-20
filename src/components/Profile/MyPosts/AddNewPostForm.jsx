import React from "react";
import {Field} from "redux-form";
import {requiredField, setMaxLength} from "../../../utils/Validators/validators";
import {Textarea} from "../../common/FormsControls/formsControls";

const maxLength30 = setMaxLength(30);

const AddNewPostForm = ({handleSubmit,...redux}) => {
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field  name={'postMessage'} placeholder={'Add New Post'}
                  type={"textarea"} component={Textarea} validate={[ requiredField, maxLength30]} />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </form>
  )
};


export default AddNewPostForm;