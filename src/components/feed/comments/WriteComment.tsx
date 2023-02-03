import { PaperAirplaneIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Mention, MentionsInput } from 'react-mentions';

import useUser from '@/hooks/useUser';

import { NEXT_URL } from '@/config';
import { IComment } from '@/pages/feed';

interface IProps {
  postId: string;
  isEditing?: boolean;
  commentId?: string;
  value?: string;
  onSubmit(data: IComment): void;
}

const WriteComment = ({
  postId,
  isEditing,
  value,
  commentId,
  onSubmit,
}: IProps) => {
  const { user: loggedInUser, loggedOut } = useUser();
  const router = useRouter();
  const profilePictureUrl =
    loggedInUser?.profile?.profilePicture?.formats.thumbnail.url;

  const [text, setText] = useState(value || '');

  const users = [
    {
      id: 0,
      display: 'Lester Gallegos',
    },
    {
      id: 1,
      display: 'Rebekah Downs',
    },
    {
      id: 2,
      display: 'Eve Bowen',
    },
    {
      id: 3,
      display: 'Mercedes Baldwin',
    },
    {
      id: 4,
      display: 'Alexa',
    },
    {
      id: 5,
      display: 'Meeesi',
    },
    {
      id: 6,
      display: 'poooo',
    },
    {
      id: 7,
      display: 'ro',
    },
    {
      id: 8,
      display: 'Al',
    },
    {
      id: 9,
      display: 'jack',
    },
    {
      id: 10,
      display: 'rohan',
    },
    {
      id: 11,
      display: 'bristi',
    },
    {
      id: 12,
      display: 'been',
    },
    {
      id: 13,
      display: 'herry',
    },
    {
      id: 14,
      display: 'john',
    },
    {
      id: 15,
      display: 'rizwan',
    },
  ];

  const createComment = () => {
    return axios.post<IComment>(`${NEXT_URL}/api/session/feed-post-comments`, {
      text,
      feed_post: postId,
      user: loggedInUser?.id,
    });
  };

  const handleChange = (e: any) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const updateComment = () => {
    return axios.put<IComment>(
      `${NEXT_URL}/api/session/feed-post-comments/${commentId}`,
      {
        text,
      }
    );
  };

  const handleSubmitComment = () => {
    if (loggedOut) {
      router.push('/login');
      return;
    }

    if (text) {
      let promise = isEditing ? updateComment() : createComment();

      promise.then(({ data }) => {
        onSubmit(data);
        setText('');
      });
    }
  };

  return (
    <div className="mt-5 flex align-middle">
      <img
        className="mr-5 h-10 w-12 rounded-full"
        src={profilePictureUrl}
        alt="profile"
      />
      {/* <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mr-2 w-full rounded-lg bg-gray-100 py-1 px-5"
        placeholder="Write a comment"
      />  */}
      {/* <Link href="/profile/rizwan-ijaz-1-fptznw9ikik"> */}

      <MentionsInput
        value={text}
        onChange={handleChange}
        className="mr-2 w-full rounded-lg bg-gray-100 py-1 px-5"
        placeholder="Write a comment"
      >
        <Mention
          trigger="@"
          data={users}
          style={{
            backgroundColor: '#daf4fa',
          }}
        />
      </MentionsInput>
      {/* </Link> */}

      {/* <label class="control-label">{{i18n 'user_tags.preferences.title'}}</label>

{{this.currentUser.user_tags}}

<TagChooser @tags={{this.currentUser.user_tags}} @onChange={{action "changeSelectedTags"}} @everyTag={{true}} @unlimitedTagCount={{true}} @options={{hash
    allowAny=true
  }} />

<div class="desc">{{html-safe this.setting.description}}</div>
<SettingValidationMessage @message={{this.validationMessage}} /> */}

      {/* <MentionsInput
       value={this.state.comment}
        onChange={event =>   this.setState({comment: event.target.value})}>
  <Mention
    trigger='@'
    data={this.props.users}
    markup='@@@____id__^^____display__@@@^^^'
  />
</MentionsInput>
<Button className='btn btn-us' onClick={() => this.saveComment()}>
  Submit
</Button> */}

      <button
        className="rounded px-3 hover:bg-gray-50"
        onClick={handleSubmitComment}
      >
        <PaperAirplaneIcon className="h-5 rotate-90" color="#377DFF" />
      </button>
    </div>
  );
};

export default WriteComment;
