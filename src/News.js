import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReducer } from './redux/apiNews/newsReducer';
import { fetchNews, store } from './redux/store';

const News = () => {
  const news = useSelector(state => state.news.news)
  const sources = useSelector(state => state.sources.sources)
  const dispatch = useDispatch();

  const createOptions = (e) => {
    e.preventDefault();
    let search = document.querySelector('#search_id').value;
    let select = document.querySelector('#select_id').value;
    let options = ''
    if (select !== '-- Choose an option --') {
      options = `sources=${select}&`
    }
    if (search) {
      options += `q=${search}&`
    }
    store.dispatch(fetchNews(options))
  }


  return (
    <div>
      <div>
        <form onSubmit={(e) => createOptions(e)}>
          <select id='select_id' type='select'>
            <option>-- Choose an option --</option>
            {sources.map((source) => {
              return (
                <option key={source.id} value={source.id}>{source.name}</option>
              )
            })}
          </select>
          <input id='search_id' placeholder='Recherche ...' type='text'></input>
          <input type='submit' value='Valider' className='btn'></input>
          <input onClick={()=>store.dispatch(fetchNews())} type='button' value='Reset' className='btn'></input>
        </form>
      </div>
      {news.map((el) => {
        return (
          <div key={el.id}>
            <p><span className='source'>{el.source.name}</span>{el.title}</p>
            <p className='description'>{el.description}</p>
            <hr className='hr'/>
          </div>
      )})}
      )
    </div>
  );
};

export default News;