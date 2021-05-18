import {React, useEffect, useState} from 'react';

const Reports = ({name}) => {

    return (
        <div className="ml-20 whitespace-nowrap">
            <h1 className="inline-block text-9x1 pl-6 pt-2">{name ? 'Pozdrav ' + name : 'Niste prijavljeni u sustav'}</h1>
        </div>
    )
}

export default Reports;