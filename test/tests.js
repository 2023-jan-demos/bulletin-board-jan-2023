// import functions under test
import { getPosts } from '../fetch-utils.js';

const test = QUnit.test;

test('should fetch all posts', async (expect) => {
    // Act
    const actual = await getPosts();

    const firstItem = actual[0];
    // Assert
    expect.deepEqual(typeof firstItem.contact, 'string', 'contact should be a string');
    expect.deepEqual(typeof firstItem.created_at, 'string');
    expect.deepEqual(typeof firstItem.message, 'string');
    expect.deepEqual(typeof firstItem.topic, 'string');
});
