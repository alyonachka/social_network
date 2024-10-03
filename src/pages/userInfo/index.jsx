export default function UserInfoPage() {
    const contact = {
        first: "Your",
        last: "Name",
        twitter: "your_handle",
        notes: "Some notes",
    };

    return (
        <div id="contact">
            <div>
                <img
                    key={contact.avatar}
                    src="./default-user-photo.png"
                    alt="User avatar"
                />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </h1>

                {contact.twitter && <p>{contact.twitter}</p>}

                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    <form action="edit">
                        <button type="submit">Edit</button>
                    </form>
                    <form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {}}
                    >
                        <button type="submit">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
