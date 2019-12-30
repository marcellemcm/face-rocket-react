import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Aline Ribeiro',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '12 Dez 2019',
        content: 'Como fazer enfeites de Natal sem gastar quase nada?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Carlos Ribeiro',
              avatar: 'https://i.pravatar.cc/150?img=15'
            },
            date: '12 Dez 2019',
            content:
              'Para ter uma linda decoração de Natal não é preciso gastar rios de dinheiro — muita coisa pode ser feita por você mesmo. No caso, é preciso ter muita criatividade para confeccionar enfeites originais que valorizam os principais símbolos natalinos.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Paula Almeida',
          avatar: 'https://i.pravatar.cc/150?img=16'
        },
        date: '12 Dez 2019',
        content:
          'Como decorar a casa para o Natal?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Ana Monteiro',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '12 Dez 2019',
            content:
              'Imagine como gostaria de ver a sua casa enfeitada. Depois, pesquise item por item para saber o que cabe no seu bolso, pois existem vários tipos de artigos, que vão desde a decoração simples e barata até os mais caros.'
          },
        ],
      },
      {
        id: 5,
        author: {
          name: 'Alice Albuquerque',
          avatar: 'https://i.pravatar.cc/150?img=21'
        },
        date: '13 Dez 2019',
        content:
          'Quais principais comidas para a ceia de Natal?',
        comments: [
          {
            id: 6,
            author: {
              name: 'Carol Dantas',
              avatar: 'https://i.pravatar.cc/150?img=24'
            },
            date: '13 Dez 2019',
            content:
              'Basicamente, uma mesa preparada para a ceia de natal é formada pelos pratos principais (carnes), acompanhamentos (arroz e farofa), saladas (salpicão, maionese, salada caesar) e frutas diversas. Há ainda aqueles que servem uma entrada com pães, bruschetas e patês ou fazem lembrancinhas para os convidados, mas fica a critério de cada um. Existem muitos pratos natalinos brasileiros em que são acrescentadas nozes, avelãs, amêndoas e castanhas.              '
          },
        ],
      }
    ]
  }


  render() {
    const { posts } = this.state;
    return (
      <div className="post-list">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    )
  }
}

export default PostList;