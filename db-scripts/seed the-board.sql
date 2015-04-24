use the_board;

update the_board.note_categories
    set display_name = 'Gaming'
    where category_id = 'gaming';

update the_board.note_categories
    set display_name = 'Programming'
    where category_id = 'programming';

update the_board.notes
    set note = 'Portal 2 is awesome',
        author = 'Parker Holladay',
        color = 'yellow'
    where category_id = 'gaming' and note_id = '4a18a6e2-cc41-459c-9a8a-d8e84a6665cb';

update the_board.notes
    set note = 'For science... You monster...',
        author = 'GLaDOS',
        color = 'orange'
    where category_id = 'gaming' and note_id = '74da87b0-b425-4862-811f-9ec7f94dffd9';

update the_board.notes
    set note = 'Hey. Listen.',
        author = 'Navi',
        color = 'blue'
    where category_id = 'gaming' and note_id = '3e42a936-8e88-4eea-a323-0f0d2dc3cab9';

update the_board.notes
    set note = 'I''m in space. Yes, we''re both in space.',
        author = 'Wheatley',
        color = 'blue'
    where category_id = 'gaming' and note_id = 'e1fba571-a0b7-4979-a335-18303f80821d';

update the_board.notes
    set note = 'When life gives you lemons, don''t make lemonade! Get mad! I''m the man that''s gonna burn your house down... with the lemons!',
        author = 'Cave Johnson',
        color = 'green'
    where category_id = 'gaming' and note_id = '1ed8f955-3387-4c45-9783-d1ff102db1f5';

update the_board.notes
    set note = 'C# is an exceptional language',
        author = 'Parker Holladay',
        color = 'blue'
    where category_id = 'programming' and note_id = 'a287f0a4-9ba7-4535-8dd0-59cf5b00f7f0';

update the_board.notes
    set note = 'I am really enjoying learning nodejs',
        author = 'Parker Holladay',
        color = 'green'
    where category_id = 'programming' and note_id = '1fe5b4f7-8b05-4c08-a7ac-f9799a05a2c5';

update the_board.notes
    set note = 'Anything Microsoft is evil',
        author = 'vivint',
        color = 'orange'
    where category_id = 'programming' and note_id = '0c27b6bf-d78b-4777-9e35-e990856b94dc';
