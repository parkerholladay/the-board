create keyspace if not exists the_board
    with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

use the_board;

create table if not exists the_board.note_categories (
    category_id text,
    display_name text,
    primary key (category_id)
);

create table if not exists the_board.notes (
    category_id text,
    note_id text,
    note text,
    author text,
    color text,
    primary key (category_id, note_id)
);
