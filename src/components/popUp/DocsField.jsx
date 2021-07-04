import React from 'react'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

function DocsField({fieldLabel, fileTypes}) {
    return (
        <div className='modal_docsfield'>
            <div className='docsfield_line'>
                <span className='docsfield_title'>{fieldLabel}</span>
                <hr />
            </div>
            <div className='docsfield_inputs'>
                {fileTypes.map( (type, key) =>(
                    <div className='docsfield_input' key={key}>
                        <input type="file" name="file" id="file" className="inputfile" />
                        <label for="file"><InsertDriveFileOutlinedIcon fontSize='small'/><span>{type}</span></label>
                    </div>
                 ) )}
                
            </div>
            <div className='docsfield_line'>
                <hr />
            </div>
        </div>
    )
}

export default DocsField
