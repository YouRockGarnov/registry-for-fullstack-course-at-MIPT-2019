import {UserProvided, connect} from '../components/UserProvided'
import React from 'react';

// Короче надо сделать UserProvided компоненты (страницы с одной карточкой)
// и функцию, которая будет возвращать роуты с ними

class OneCardPage extends UserProvided {
    render()
        return <Page title="Пациенты" breadcrumbs={[{ name: 'Карточки', active: true }]}>
            {rows}
        </Page>
    }
}

export default connect(OneCardPage);