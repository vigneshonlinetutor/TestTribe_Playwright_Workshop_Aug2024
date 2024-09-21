import { test, expect } from '@playwright/test';

test('GET API', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toEqual(200);
    expect(responseJson.data.email).toBe("janet.weaver@reqres.in");
    expect(responseJson.support.url).toBe("https://reqres.in/#support-heading");
});

test('POST API', async ({ request }) => {
    var userDetails = {
        "name": "Vignesh",
        "job": "Teacher"
    }

    const response = await request.post('https://reqres.in/api/users/2',{
        data:userDetails
    });
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toEqual(201);
    expect(responseJson.name).toBe(userDetails.name);
    expect(responseJson.job).toBe(userDetails.job);
});


test('PUT API', async ({ request }) => {
    var userDetails = {
        "name": "Vignesh Updated",
        "job": "Trainer"
    }

    const response = await request.put('https://reqres.in/api/users/2',{
        data:userDetails,
    });
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toEqual(200);
    expect(responseJson.name).toBe(userDetails.name);
    expect(responseJson.job).toBe(userDetails.job);
});

test('DELETE API', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toEqual(204);
});