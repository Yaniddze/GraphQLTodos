import { gql } from '@apollo/client';
import { TodoUnit, Todo } from './types';
import { client } from '../../configuration/GraphQL';

const imgs = [
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxQj1ii5I3JW0fhYoMrjCOwSDT4gz969fQKQ&usqp=CAU',
  'data:image/jpeg;base64,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',
];

const lorem = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?';

type TodoFromApi = {
  id: string;
  title: string;
};

export class GraphQLTodoUnit implements TodoUnit {
  FetchAll(): Promise<Todo[]> {
    return client.query({
      query: gql`
        query(
          $options: PageQueryOptions
        ) {
          todos(options: $options) {
           data {
              id,
              title,
            }
          }
        }
      `,
      variables: {
        options: {
          slice: {
            start: 0,
            end: 10,
            limit: 10,
          },
        },
      },
    })
      .then((res) => res.data.todos.data
        .map((todo: TodoFromApi): Todo => ({
          id: todo.id,
          title: todo.title,
          description: lorem,
          img: imgs[Math.floor(Math.random() * 3)],
        })))
      .catch((): Todo[] => [{
        id: 'none',
        img: 'data:image/png;base64,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',
        title: 'error!',
        description: 'some error',
      }]);
  }

  ById(id: string): Promise<Todo> {
    return client.query({
      query: gql`
        query($id: ID!) {
          todo(id: $id) {
            id,
            title,
          }
        }
      `,
      variables: {
        id,
      },
    })
      .then((res): Todo => ({
        id: res.data.todo.id,
        title: res.data.todo.title,
        description: lorem,
        img: imgs[Math.floor(Math.random() * 3)],
      }))
      .catch((): Todo => ({
        id: 'none',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADZCAMAAADyk+d8AAAAkFBMVEX///7/////AAD/Hx//UVH/YmL/MDD/PT3/Vlb/Pz//Nzf/Jib/QkL/dXX/S0v/4uL/Fxf/i4v/enr/b2//LS3/XFz/k5P/g4P/m5v/aGj/j4//7Oz/ycn/fn7/eHj/Rkb/IyP/1tb/qKj/sbH/n5//ubn/Dw//9fX/zMz/39//wcH/goL/ra3/t7f/pKT/8fFGQOoeAAAPaElEQVR4nO2daZuqvM/AqfvOprigM4MLKi58/2/3tIiOSlpKmzr/635O3h4P5Dc0aZKmrUX+v4j11wp8TP6R/vfkH6kp2adhGNp2GKb7D7/5M6T2chN4k3btXdoTL9gs7Y/oYJrU3i0mToHwXeLOYnc0rIlB0jBxB6WMzzJwk9CcOoZI94lXr0R5l7qXpGZUMkF6nBUtsoq0ZyZGMjpp5MZamDdxphG2Yrik9gKBMpd4geuTMUk3PTzOTHobRO3QSO0VMuZNPLQPi0S6bBjhZNJY4qiIQnrpG+Nk0r9gKIlAuimPgXTFQTBYbdKLec6MVfu7apIuzY7bZ+lr2qsWqT36GCeTkZYf1iE1M6+IZPUnpLuPczLZfZw07fwJKJ1eVVMdRdK1kpbOoDFfTafuYuFOV35noJbYrT9Iuq/qiRrTdXKECkf7Y7KeVh0eI6USlAppUkWt5mx5H29WUfJ/SQ/bZpWHJp8h/ZJWaL6xeYgAsL2ZSz/56wOk4VhOl1YQSUG+4kZBS+7x48oVp6qkSznMbVgR8xfW3srBVg2ZKpIGMjq4tgrlE+3RlXlNYJJUwm00Eh3MB2wikfA2zZGWV088rc/5wmp7pW/rVZluKpCGpW8O9iiYd9h9ef2tgl+SJz2WclqInDdWq9QvyFeGpUmjkle62Jw3VlLmnCJs0oP4fX5qgPPGmvriVx9wScXTaCsyxHljjcSeUHJilSMVf9G1Qc4b6xnhq0qRCm2UJoxGOTNWcTocYZEKve7G8AfNUclGpISMB5YgFc2jgw980Jw1/RboITGvlpPuBS9YfOSD5qiioDvGIBU4vsPnODNWgWPs6ZPyg/rWx0buAzXlJ3RzXVL+iGl+cOQ+UAm/LFGWxJWQ8ktGnzTRZ1R+1F8SQYhJ+W538xecGSt/uhE7YDEpt2a0/CtQisqNTFvqpEPeM6O/A6Wo3JDNUyXlGunxL0FFqKI6sICUGzLofNGXd+OjCsotAlJezUoZlD00PEaZHO1wr07LRe2okPJ8nKozIsQ+ryZN/+vkLmbb9fmyS6JQtfDEdUv8hgguKW/sKk4vNMdtdhuTuf+1mrrB7LreXJLlIYrsveLzeB+CO365pBP4QYGiYnt//N3oUNJhRrplpAkjDVOlB1q8EIJbBOaRcvzuXBE0bLUGjLTpD73f0buk9hqGe0VUTkTOC5V4pPBTWmpmRfb9ca/7PaKkc5+RBtvrebNjwzfzTGqkBA73eQkch5QT2CtmL6TptHrt71GDkVJDXWSGeidNVT9qCivJCfVhUs4zFPNRmlfSb9oejBqd5ouh3klVvTknX4U7IWBSODdS9EYWmcT9cavHSJlL8m6kzFAPzFCVSXleyZcnhUtkA2WFas4PJcU2VGaqcBs8WEADSeGGjVD1k6aUtJ8Zagc0VGVSi5NWNmRJ4VBLOSOl6jj13FAnD0O9PhuqKqnFqXlHkqTgJx2p/+HTX9Ln2OH8iB3USS0C1kZHcqTwJ1UvjxGLkjJD5cQOtmrskD0cHr/ARwVIwYWBmU6mVoszQ8V3SezhM0hdIKcpktrQ/3R06mOkHtPhK4odtBJesJW62CBbJAVLKlp1I5rp/hpqIXaI9Eg5CdywnBTM1hpa5RTiZaR57HAz1OA5yNcrkcMetJC9FUjBYa9XOKLPvLkknqFqkoKBzqyUFNqVppirPVRJag9DBWMHHY9kcfK3QkrzTgoOeltTk2NGyg/ydUlBJ/qep76TQn8ezU/KJtRYFDscNUktMCN5Lz68kYL+SLu8S/pg7HC9uyTNx3MsdS8khcJIPcebaTKvOS+xw9erS9J/AVSxXQtJoY3d+uvB1PnmLmkAxg76L4By8oGIFAoi6/pLE7nz5bkkTYeXvQHavJAKSNfgINDXI2SkvCD/oJr4Pr8B1pxPCqVAFsJyE7mTgrEDBqkFaD7ik0Ke10dp1+2IYgfdSSZ7AzTR7Lmk0AYulP4UEggMdYnwAjjO33FJoTQGpwU7d0mtYuywS3D+llAtfsglBX68QlkU/nVJ3WLsgLPADu6c5JFC4SNScxVNHOJi7DDLXBLOCjs4pdocUmihDqkXhzqMQuxwKxDudgiu1+IM3w2HFGiO1g3uH3pcOUH+5rLDcL0W7H2HHFIgNb1gkUb82AHnDeDasQOTQstOOCMrT9zgNYsE6xVQKJuCpMCM9IPWjkO6NU6BEK2hFIp9lyDptvhDD4/U5cQOZ7TmJmi76BYkBSwarzvwETu8Ly6u0XpnIUP1QVLgEAqEfOquRvoaO8zvscMa6w1g5WEMkhZ/hzWbZnrU89jhLchHHDYwQZEUiJC6iP2BxHsy1N/FxS2W62WvABrpbYAUcL14DomqcQFjhxliWynkkg4AKVAsu2KS2mDsMMOasa0sECvIGSAFNgWi9isTMHaYYZQ07m8A2sUWACmQnOK5XqaHD8UOqMMGcL5DgBRYsUKKvXM9zkDssEB0SBZUHWoApEBvGmpr9s1QX2KHk+ui9rkD00wLIC3+CqHS+6pHsUDoIjok+obi8ngsRarergLrMS8WCKe4wwawQCnSJjLpumioW1xSYKWwSApYM0qp90mPYyF2WGE6pMy9F2RfIAXy2BPyZhFSiB083I03UH0wLJACYa+LTfq+uOgNUecxC4p+bBlS1S5XriLntwLhEHnUQA3Yf0Nqv7kkHzNCsv6HSC0Svxqqj7wRUJkU206Zb3yJHeaogbWsnX7A995z1EfsMMc+kuZUhCj6XvPz6X0h6mGoTXTnLjWfmo+RmCo/z03NE+yNyXIxkvm418qG11OBcIK9YVcy7i2uyjj4pMnz4mIHN24Aq/hQLmM6P81USZ9ihw6+HygiQPmp6ZrDTZfer6E2dDrewYcDXnUEkAJ1JPz94GTx20E4wj5AAIoJoDoSsHMKN6fKlDnUHgXCAWq9wYL7V6DaoOF6b66M9RQ7oJupZL0X6Ij4QidlPVi5oX7jB5vAWYxLgBQY5D0DpNda3pjU3qGTAvv5oHUZw2ttd22O99ihhxzey6+1QYesGDiM474hqt1G/6RACb8PkgLhsYETc7LMjRpqD90JQGvic5AU6HMw4ZIuN9LxGZ1Uus8BmI2Qq/iZPunNUH/QLUO+d8VkP9KzQq2YxQ59bG9XoR8J2vSH1WP2rJHLhm8fPfmlZlEQTo8ZFPli9Q0+a3RgpHX0+AvqMvI5pAZ7QZ81YluM+zF6Fl6lF9Rgf++LTpNa/Qf9T1ipv9dcz/arTmuaz0zQB2+Vnm1zffivOtk1J8ZdTqzchw/trTBw3h75idFPt6u4twLaL2PC+07xh0rF/TLgjmvEhqG7VkkNOwsH90B9Ez7pGvg9wr62olroxTKg3CDc1wYFhCZi3wH25FV5r6Kh/acFvTB76LIHVt5/Cg5f/T3FBcXQi/fQnuKzkNTMPvGiZsiPU9gnbmTvv3FR2ftv5DwH06J2ngN4Rgf+QiqqqJ3RYeLcFcMCW+m2lBT0SfhrxoiiepaOgfOR3jW7vRjtcarnIxk48+pFL/aGwyG7ZBHpgcpnXuGfY/ai1yV/fG+Gc82QxjlmnLPpMOqhJK/fxY5Tr8fs6ij9R+qcTQdb+DeCVtbte8ZZN36v1x/rT9Ra5w1yPqp29kas8e2D/mSH+Y5G3926bulB8wxJzqnpmuOXkO4NtN/qZn1Xk0lnNNZ7qO65oJyzXtt6HiRvpHB+eoMRa+6lMp80tIoP+me9QguMNdYdoaPV7c8f11vsCPXh6jSdnjy/OdJZuNQ/v5d3JrNO/JBHJM64PZrMPbb1dBa4K7/ZUB8pGGcyI5+zbT1KWvSTDjrzLzfYrs/n62xx8hvKJQ2Uc7bhlEb57HTrsY8w7vdGE38aXDe7JLmcZ67XVD7TGufsdN5tCcr5290fjduNpuduN+z0veVuHUx91Tyfd1FS1fPweefqq3qlXC9nTAfvKrjuDkfbjpLN1h121CIlnoFNeECV761QbE/Ib4dwqJn6p2C9i+x9elxetu5XQ4kU8d4K5LtI8jGSf9P17mCnoQYp5l0knJympni/zGOS6Xbm3uJ6WUbHY5RQlzRUWV/k3i8DRkelpKh3BuXLCU6feqShO1vvlodlcrkGJ1+hEwj7ziD+JVoKqHmEGf/0vif+arFdb3aXzXrmfk2qZw7o90ARcJlZGTVbOYnp8G00/RM7h+S6ZUHSqHLmZuBuL97cXFNxS/lCCPuonaa/chfBwp16/qRyMz7/yjGN+9ow7+DLwy76UTPUobdaecP5pF21wCq4yVfnDj7BTcxB1cAwH3RxnaKyPZlUmp1BxVjQ2L2KorsyK29Ky90vQ2V7SKg02hVDQdElpZp3ZYqu4ax8/2lexmNVh157MBh0+xVvFhXdf8q96UqaFPNO29wYsl1841afneRe5X8bvtOW7OEE7j5iqqFaT2ZWcfepyERrsSBkkCZFvXuavjCZjsb9tn+uWNgmoeimeJS7p5HvE396daX/JbwmHuk+cV4BOJcP3BFPSMq7zjKTSAZCilTkCmpZ349hUGCLwJMcygGkSQURBJNeZJCVDin+3CIPKkta8lVrc5yFM4gz5M/oVUClScW2SsVVvcpUzLkHDi54kUgWQJpU7IGZBBb2oQXE4gejuch43aqkJBSEEDdZYH5X+j0FocJNHIl5VIFUGBjm4rFVdxRMYgNbmt6kPARUJRWE+w8Z7fRZ6RN28I2HLzIvU1eDVJDEPYmr9WHp/z2WuaFMytI0PVJ+aeNFWrOsd0SFkthb8fR5l5LEW5uUhMA2VRA2iCrCsp9HgezjK/giRVICbX7kyHxzawuSgiT2WcIN5CKsAqKRSo7gXJrb5X3llodIA/jljHOrNyyiui4mKdlLOMYXaUzXyRFKltNjcj1Vflp52o1FCnexl4vDlp+mLpOpN290S0MRUM7l6iGSliSMBqUDdzGYI4W3hpkXFQvVJSXQqWGGZaqhrQ4psav6Ej1pFFtZP0VKyBK4LsCQjGVTbjOk1FzBRmJ0cXblqhgmJWRjntW56KuJQErIRTJYVZSW9vdkgkJK7dXc9NqomrRwBImU+mEzc85Uy98+CxoplQ3cbasuXX53UXXBJKUfdoHnnZygcgoqFFxSKpGLAeu4EbZi6KRUjjNoa7K8DGbyVVx5MUFKZZ+soJ3b5VI/JUrZZ7kYImWSJi64mYUrIzdRTckkxCBpJsfdolluuPV5sEObTjhimvQm9nITrJqFSSgeNE/B5YDrY3nyGdJf2afhTVJD5siVT5P+nfwj/e/JP9L/nvwfYD+6QNwQbCMAAAAASUVORK5CYII=',
        title: 'error!',
        description: 'some error',
      }));
  }
}
